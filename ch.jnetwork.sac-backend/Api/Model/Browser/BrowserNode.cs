namespace SimpleAngularControls.Api.Model.Browser
{
    public class BrowserNode : IBrowserNode
    {
        public string Name { get; set; } = string.Empty;

        public List<IBrowserNode> ChildNodes { get; set; } = new List<IBrowserNode>();

        public List<IBrowserFile>? Files { get; set; } = null;

        IEnumerable<IBrowserNode> IBrowserNode.ChildNodes => this.ChildNodes;

        IEnumerable<IBrowserFile>? IBrowserNode.Files => this.Files;
    }
}