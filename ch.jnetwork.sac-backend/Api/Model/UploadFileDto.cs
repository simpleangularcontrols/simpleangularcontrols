namespace SimpleAngularControls.Api.Model
{
    /// <summary>
    /// Registrations Message für Upload
    /// </summary>
    public class UploadedFileDto
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