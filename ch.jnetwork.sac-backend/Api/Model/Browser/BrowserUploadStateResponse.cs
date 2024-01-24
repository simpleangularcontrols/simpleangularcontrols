namespace SimpleAngularControls.Api.Model.Browser
{
    /// <summary>
    /// Status Response bei File Upload
    /// </summary>
    public class BrowserUploadStateResponse : IBrowserUploadStateResponse
    {
        /// <summary>
        /// ID von gesendetem Chunk
        /// </summary>
        public string? documentid { get; set; }
        /// <summary>
        /// Status von gesendet File
        /// </summary>
        public string status { get; set; } = string.Empty;
    }
}