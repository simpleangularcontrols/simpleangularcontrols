using System.Collections.Generic;

namespace AngularPrototype.Api.Model.Browser
{
    public class BrowserNode : IBrowserNode
    {
        public string Name { get; set; }

        public List<IBrowserNode> ChildNodes { get; set; } = new List<IBrowserNode>();

        public List<IBrowserFile> Files { get; set; } = null;

        IEnumerable<IBrowserNode> IBrowserNode.ChildNodes => this.ChildNodes;

        IEnumerable<IBrowserFile> IBrowserNode.Files => this.Files;
    }
}