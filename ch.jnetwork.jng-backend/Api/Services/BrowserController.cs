using AngularPrototype.Api.Model.Browser;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
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
        /// Temp Path for Chunked File Upload
        /// </summary>
        private readonly string uploadTempPath = "~/upload/temp";

        /// <summary>
        /// Konstruktor
        /// </summary>
        public BrowserController()
        {
            this.basePath = HttpContext.Current.Server.MapPath("~/upload/browser");
        }

        [ActionName("getfiles")]
        [HttpPost]
        public IBrowserFilesResponse GetFiles([FromBody] BrowserNodeRequest request)
        {
            this.ValidatePath(request.Path);

            if (request.Path.StartsWith("/"))
                request.Path = request.Path.TrimStart('/');

            if (request.Path.StartsWith("\\"))
                request.Path = request.Path.TrimStart('\\');

            string path = Path.Combine(basePath, request.Path);

            DirectoryInfo directory = new DirectoryInfo(path);

            return new BrowserFilesResponse()
            {
                Files = directory.GetFiles().Select(x => new BrowserFile()
                {
                    Filename = x.Name,
                    Size = x.Length
                }).Cast<IBrowserFile>().ToList()
            };
        }

        [ActionName("deletefile")]
        [HttpPost]
        public IBrowserFilesResponse DeleteFile([FromBody] BrowserFileDeleteRequest request)
        {
            this.ValidatePath(request.Path);

            if (request.Path.StartsWith("/"))
                request.Path = request.Path.TrimStart('/');

            if (request.Path.StartsWith("\\"))
                request.Path = request.Path.TrimStart('\\');

            string path = Path.Combine(basePath, request.Path);

            if (File.Exists(path))
            {
                File.Delete(path);
            }

            return GetFiles(new BrowserNodeRequest()
            {
                Path = Path.GetDirectoryName(request.Path)
            });
        }

        [ActionName("renamefile")]
        [HttpPut]
        public IBrowserFilesResponse RenameFile([FromBody] BrowserFileRenameRequest request)
        {
            this.ValidatePath(request.Path);

            if (request.Path.StartsWith("/"))
                request.Path = request.Path.TrimStart('/');

            if (request.Path.StartsWith("\\"))
                request.Path = request.Path.TrimStart('\\');

            string path = Path.Combine(basePath, request.Path);
            string newFile = this.ValidateFilename(Path.Combine(Path.GetDirectoryName(path), request.NewFilename));


            if (File.Exists(path))
            {
                File.Move(path, newFile);
            }

            return GetFiles(new BrowserNodeRequest()
            {
                Path = Path.GetDirectoryName(request.Path)
            });
        }

        /// <summary>
        /// Get Nodes
        /// </summary>
        /// <param name="request">Node Request</param>
        /// <returns>Node Item</returns>
        [ActionName("getnodes")]
        [HttpPost()]
        public IBrowserNodeResponse GetNode([FromBody] BrowserNodeRequest request)
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

            return new BrowserNodeResponse()
            {
                Node = browserNode
            };
        }

        /// <summary>
        /// Erstellt einen neuen Ordner
        /// </summary>
        /// <param name="request">Request Model zum anlegen des neuen Ordners</param>
        /// <returns>Daten mit dem neuen Ordner</returns>
        [ActionName("newnode")]
        [HttpPost()]
        public IBrowserNodeResponse NewNode([FromBody] BrowserNodeNewRequest request)
        {
            this.ValidatePath(request.Path);

            if (request.Path.StartsWith("/"))
                request.Path = request.Path.TrimStart('/');

            if (request.Path.StartsWith("\\"))
                request.Path = request.Path.TrimStart('\\');

            string path = Path.Combine(basePath, request.Path);
            string folder = this.ValidateFoldername(Path.Combine(path, request.NewFoldername));

            if (!Directory.Exists(folder))
            {
                Directory.CreateDirectory(folder);
            }

            return GetNode(new BrowserNodeRequest()
            {
                Path = $"{request.Path}/{Path.GetFileName(folder)}"
            });
        }

        /// <summary>
        /// Benennt einen bestehenden Ordner um
        /// </summary>
        /// <param name="request">Request Model zum umbenennen des Ordners</param>
        /// <returns>Daten mit neuen Ordner Daten</returns>
        [ActionName("renamenode")]
        [HttpPut()]
        public IBrowserNodeResponse RenameNode([FromBody] BrowserNodeRenameRequest request)
        {
            this.ValidatePath(request.Path);

            if (request.Path.StartsWith("/"))
                request.Path = request.Path.TrimStart('/');

            if (request.Path.StartsWith("\\"))
                request.Path = request.Path.TrimStart('\\');

            string path = Path.Combine(basePath, request.Path);
            string newFolder = this.ValidateFoldername(Path.Combine(Path.GetDirectoryName(path), request.NewFoldername));

            if (Directory.Exists(path) && !Directory.Exists(newFolder))
            {
                Directory.Move(path, newFolder);
            }

            return GetNode(new BrowserNodeRequest()
            {
                Path = $"{Path.GetDirectoryName(path)}/{Path.GetFileName(newFolder)}"
            });
        }

        /// <summary>
        /// Löscht einen Ordner inkl. der Struktur
        /// </summary>
        /// <param name="request">Request Model zum löschen des Ordners</param>
        /// <returns></returns>
        [ActionName("deletenode")]
        [HttpPost()]
        public IBrowserNodeResponse DeleteNode([FromBody] BrowserNodeDeleteRequest request)
        {
            this.ValidatePath(request.Path);

            if (request.Path.StartsWith("/"))
                request.Path = request.Path.TrimStart('/');

            if (request.Path.StartsWith("\\"))
                request.Path = request.Path.TrimStart('\\');

            string path = Path.Combine(basePath, request.Path);

            if (Directory.Exists(path))
            {
                Directory.Delete(path, true);
            }

            string parentFolder = String.Join("/", request.Path.Split(new char[] { '\\', '/' }).Reverse().Skip(1).Reverse());

            return GetNode(new BrowserNodeRequest()
            {
                Path = parentFolder
            });
        }

        #region Upload

        /// <summary>
        /// File für Upload registrieren
        /// </summary>
        /// <param name="register">Registrierung Metadaten</param>
        /// <returns>HTTP Response mit URL für File</returns>
        [ActionName("uploadregister")]
        [HttpPost]
        public HttpResponseMessage UploadRegister([FromBody] BrowserUploadRegisterRequest request)
        {
            HttpResponseMessage response = new HttpResponseMessage();

            Guid guid = Guid.NewGuid();
            string file = HttpContext.Current.Server.MapPath(string.Format("{0}/{1}.meta", uploadTempPath, guid));

            // MetaData setzen
            string metadata = JsonConvert.SerializeObject(request);
            using (FileStream fileStream = new FileStream(file, FileMode.CreateNew, FileAccess.ReadWrite, FileShare.Read))
            {
                using (StreamWriter writer = new StreamWriter(fileStream))
                {
                    writer.Write(metadata);
                    writer.Close();
                }
                fileStream.Close();
            }

            // URL für Upload zurücksenden
            string uploadUrl = this.Url.Link("BrowserApi", new { Controller = "Browser", Action = "uploadfile", Id = guid.ToString() });

            // HACK: Replace Port für Angular Inside Apps
            uploadUrl = uploadUrl.Replace(":55768/", ":4200/");

            response.Headers.Add("Location", uploadUrl);
            return response;
        }

        /// <summary>
        /// Upload Methode für File
        /// </summary>
        /// <param name="id">Upload Registrations ID</param>
        /// <returns>Upload Response. Gibt Document ID zurück wenn Upload fertig</returns>
        [ActionName("uploadfile")]
        [HttpPut]
        public HttpResponseMessage GetFile(string id)
        {
            HttpResponseMessage response = new HttpResponseMessage();
            HttpRequestMessage request = this.Request;

            byte[] data = request.Content.ReadAsByteArrayAsync().Result;
            string fileContent = HttpContext.Current.Server.MapPath(string.Format("{0}/{1}.dat", uploadTempPath, id));
            string fileMeta = HttpContext.Current.Server.MapPath(string.Format("{0}/{1}.meta", uploadTempPath, id));

            // Non Chunking Upload
            if (request.Content.Headers.ContentRange == null)
            {
                using (Stream contentStream = new FileStream(fileContent, FileMode.OpenOrCreate, FileAccess.ReadWrite, FileShare.Read))
                {
                    using (BinaryWriter contentWriter = new BinaryWriter(contentStream))
                    {
                        contentWriter.Write(data);
                        contentWriter.Close();

                        using (FileStream metaFileStream = new FileStream(fileMeta, FileMode.CreateNew, FileAccess.ReadWrite, FileShare.Read))
                        {
                            this.UpdateBytesWritten(metaFileStream, data.Length);
                            metaFileStream.Close();
                        }

                        response.Content = this.GetDocumentResponse(id);
                        response.StatusCode = HttpStatusCode.OK;
                    }
                }
                return response;
            }

            // Resume Call
            if (data.Length == 0)
            {
                using (FileStream fileStream = new FileStream(fileMeta, FileMode.Open, FileAccess.ReadWrite, FileShare.Read))
                {
                    using (StreamReader reader = new StreamReader(fileStream))
                    {
                        string metadata = reader.ReadToEnd();
                        reader.Close();

                        BrowserUploadRegisterRequest uploadRegister = JsonConvert.DeserializeObject<BrowserUploadRegisterRequest>(metadata);

                        response.Headers.Add("Range", string.Format("bytes=0-{0}", uploadRegister.byteswritten));
                        response.StatusCode = (HttpStatusCode)308;
                        response.Content = new StringContent("Resume Incomplete");
                    }
                    fileStream.Close();
                }
                return response;
            }

            using (Stream stream = new FileStream(fileContent, FileMode.Create | FileMode.Append, FileAccess.Write, FileShare.Read))
            {
                using (BinaryWriter writer = new BinaryWriter(stream))
                {
                    writer.Write(data);
                }
            }

            using (FileStream metaFileStream = new FileStream(fileMeta, FileMode.OpenOrCreate, FileAccess.ReadWrite, FileShare.Read))
            {
                this.UpdateBytesWritten(metaFileStream, request.Content.Headers.ContentRange.To.Value);
            }

            if (request.Content.Headers.ContentRange.To < request.Content.Headers.ContentRange.Length - 1)
            {
                response.Headers.Add("Range", string.Format("bytes=0-{0}", request.Content.Headers.ContentRange.To));
                response.StatusCode = (HttpStatusCode)308;
                response.Content = this.GetDocumentIncomplete();
            }
            else
            {
                response.Content = this.GetDocumentResponse(id);
                response.StatusCode = HttpStatusCode.OK;
            }

            return response;
        }

        /// <summary>
        /// Löscht ein File im Temp. File auf dem Server
        /// </summary>
        /// <param name="id">Upload ID</param>
        /// <returns>Status wenn File gelöscht</returns>
        [ActionName("uploadfile")]
        [HttpDelete]
        public HttpResponseMessage DeleteUploadTempFile(string id)
        {
            string fileContent = HttpContext.Current.Server.MapPath(string.Format("{0}/{1}.dat", uploadTempPath, id));
            string fileMeta = HttpContext.Current.Server.MapPath(string.Format("{0}/{1}.meta", uploadTempPath, id));

            if (File.Exists(fileContent))
                File.Delete(fileContent);

            if (File.Exists(fileMeta))
                File.Delete(fileMeta);

            return new HttpResponseMessage(HttpStatusCode.OK);
        }

        [ActionName("uploadfile")]
        [HttpPost]
        public IBrowserFilesResponse SaveFile([FromBody] BrowserFileSaveRequest request)
        {
            this.ValidatePath(request.Path);

            if (request.Path.StartsWith("/"))
                request.Path = request.Path.TrimStart('/');

            if (request.Path.StartsWith("\\"))
                request.Path = request.Path.TrimStart('\\');

            string path = Path.Combine(basePath, request.Path);
            string fileContent = HttpContext.Current.Server.MapPath(string.Format("{0}/{1}.dat", uploadTempPath, request.UploadId));
            string fileMeta = HttpContext.Current.Server.MapPath(string.Format("{0}/{1}.meta", uploadTempPath, request.UploadId));

            if (File.Exists(fileMeta))
            {
                using (FileStream fileStream = new FileStream(fileMeta, FileMode.Open, FileAccess.ReadWrite, FileShare.Read))
                {
                    using (StreamReader reader = new StreamReader(fileStream))
                    {
                        string metadata = reader.ReadToEnd();
                        reader.Close();

                        BrowserUploadRegisterRequest uploadRegister = JsonConvert.DeserializeObject<BrowserUploadRegisterRequest>(metadata);

                        string filename = this.ValidateFilename(Path.Combine(path, uploadRegister.name));
                        File.Copy(fileContent, filename);
                    }
                }

                // Clean Upload Temp
                DeleteUploadTempFile(request.UploadId);
            }

            return GetFiles(new BrowserNodeRequest()
            {
                Path = request.Path
            });
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="metaFileStream"></param>
        /// <param name="bytesWritten"></param>
        private void UpdateBytesWritten(FileStream metaFileStream, long bytesWritten)
        {
            using (StreamReader metaReader = new StreamReader(metaFileStream))
            {
                string metadata = metaReader.ReadToEnd();
                BrowserUploadRegisterRequest uploadRegister = JsonConvert.DeserializeObject<BrowserUploadRegisterRequest>(metadata);

                if (uploadRegister == null)
                    uploadRegister = new BrowserUploadRegisterRequest();

                uploadRegister.byteswritten = bytesWritten;

                using (StreamWriter metaWriter = new StreamWriter(metaFileStream))
                {
                    metaFileStream.Seek(0, SeekOrigin.Begin);
                    metaWriter.Write(JsonConvert.SerializeObject(uploadRegister));
                    metaWriter.Close();
                }
            }
        }

        /// <summary>
        /// Erzeugt eine Response wenn ein File komplett hochgeladen wurde.
        /// </summary>
        /// <param name="id">Upload ID</param>
        /// <returns>Response für Uploader Komponente</returns>
        private StringContent GetDocumentResponse(string id)
        {
            BrowserUploadStateResponse registration = new BrowserUploadStateResponse();
            registration.documentid = id.ToString();
            registration.status = "done";
            return new StringContent(JsonConvert.SerializeObject(registration), Encoding.UTF8, "application/json");
        }

        /// <summary>
        /// Response wenn Upload noch nicht Komplett
        /// </summary>
        /// <returns>Response für Uploader Komponente</returns>
        private StringContent GetDocumentIncomplete()
        {
            BrowserUploadStateResponse registration = new BrowserUploadStateResponse();
            registration.documentid = null;
            registration.status = "incomplete";
            return new StringContent(JsonConvert.SerializeObject(registration), Encoding.UTF8, "application/json");
        }

        #endregion

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

        private string ValidateFilename(string file)
        {
            int count = 1;

            string fileNameOnly = Path.GetFileNameWithoutExtension(file);
            string extension = Path.GetExtension(file);
            string path = Path.GetDirectoryName(file);
            string newFile = file;

            while (File.Exists(newFile))
            {
                string tempFileName = string.Format("{0}({1})", fileNameOnly, count++);
                newFile = Path.Combine(path, tempFileName + extension);
            }

            return newFile;
        }

        private string ValidateFoldername(string folder)
        {
            int count = 1;

            string foldername = Path.GetFileName(folder);
            string path = Path.GetDirectoryName(folder);
            string newFolder = folder;

            while (Directory.Exists(newFolder))
            {
                string tempFileName = string.Format("{0}({1})", foldername, count++);
                newFolder = Path.Combine(path, tempFileName);
            }

            return newFolder;
        }
    }
}