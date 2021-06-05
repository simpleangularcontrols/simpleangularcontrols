using AngularPrototype.Api.Model;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace AngularPrototype.Api.Services
{
    [Route("api/browser/{action}", Name = "BrowserApi")]
    public class BrowserController : ApiController
    {
        /// <summary>
        /// Basis Pfad für Node
        /// </summary>
        private readonly string basePath;

        /// <summary>
        /// Konstruktor
        /// </summary>
        public BrowserController()
        {
            this.basePath = HttpContext.Current.Server.MapPath("~/layout");
        }

        [ActionName("node")]
        [HttpPost()]
        public IBrowserNode GetNode([FromBody] BrowserNodeRequest request)
        {
            this.ValidatePath(request.Path);

            if (request.Path.StartsWith("/"))
                request.Path = request.Path.TrimStart('/');

            if (request.Path.StartsWith("\\"))
                request.Path = request.Path.TrimStart('\\');

            string path = Path.Combine(basePath, request.Path);

            DirectoryInfo directory = new DirectoryInfo(path);
            BrowserNode browserNode = new BrowserNode();

            browserNode.Name = directory.Name;
            this.FillChilds(directory, browserNode);

            browserNode.Files = directory.GetFiles().Select(x => new BrowserFile()
            {
                Filename = x.Name,
                Size = x.Length
            }).Cast<IBrowserFile>().ToList();

            return browserNode;
        }

        [ActionName("files")]
        [HttpPost]
        public List<IBrowserFile> GetFiles([FromBody] BrowserNodeRequest request)
        {
            this.ValidatePath(request.Path);

            if (request.Path.StartsWith("/"))
                request.Path = request.Path.TrimStart('/');

            if (request.Path.StartsWith("\\"))
                request.Path = request.Path.TrimStart('\\');

            string path = Path.Combine(basePath, request.Path);

            DirectoryInfo directory = new DirectoryInfo(path);

            return directory.GetFiles().Select(x => new BrowserFile()
            {
                Filename = x.Name,
                Size = x.Length
            }).Cast<IBrowserFile>().ToList();
        }

        private void FillChilds(DirectoryInfo directory, BrowserNode node)
        {
            DirectoryInfo[] subdirectories = directory.GetDirectories();
            node.ChildNodes = new List<IBrowserNode>(subdirectories.Length);

            foreach (DirectoryInfo subdirectory in subdirectories)
            {
                BrowserNode subnode = new BrowserNode();
                subnode.Name = subdirectory.Name;
                node.ChildNodes.Add(subnode);

                this.FillChilds(subdirectory, subnode);
            }
        }

        private void ValidatePath(string path)
        {
            if (path.StartsWith(".."))
                throw new InvalidDataException("Path is not allowed!");

            if (path.IndexOf("..") >= 0)
                throw new InvalidDataException("Path is not allowed!");
        }
    }
}