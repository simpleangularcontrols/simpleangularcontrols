namespace SimpleAngularControls.Api.Model.Browser
{
    /// <summary>
    /// Response für GetFiles Request von File Browser
    /// </summary>
    public class BrowserFilesResponse : IBrowserFilesResponse
    {
        /// <summary>
        /// Liste von Files
        /// </summary>
        public IList<IBrowserFile> Files { get; set; } = new List<IBrowserFile>();

        public BrowserNode? Node { get; internal set; }
    }
}