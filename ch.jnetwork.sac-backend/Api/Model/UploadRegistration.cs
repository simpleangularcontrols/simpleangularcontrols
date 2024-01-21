namespace SimpleAngularControls.Api.Model
{
    /// <summary>
    /// Response Object für Upload Registration mit ID für Server Model
    /// </summary>
    public class UploadRegistration
    {
        /// <summary>
        /// Document ID für Service
        /// </summary>
        public string documentid { get; set; } = string.Empty;

        /// <summary>
        /// Status
        /// </summary>
        public string status { get; set; } = string.Empty;
    }
}