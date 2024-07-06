namespace SimpleAngularControls.Api.Model.Browser
{
    /// <summary>
    /// Register Request für Upload von File
    /// </summary>
    public class BrowserUploadRegisterRequest : IBrowserUploadRegisterRequest
    {
        /// <summary>
        /// Mime Type
        /// </summary>
        public string mimeType { get; set; } = string.Empty;

        /// <summary>
        /// Filename
        /// </summary>
        public string name { get; set; } = string.Empty;

        /// <summary>
        /// Bytes des Files
        /// </summary>
        public long byteswritten { get; set; }
    }
}