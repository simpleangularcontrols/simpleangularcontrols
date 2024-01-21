namespace SimpleAngularControls.Api.Model
{
    /// <summary>
    /// Response object for upload registration with ID for server model
    /// </summary>
    public class UploadRegistration : IUploadRegistration
    {
        /// <summary>
        /// Document ID for service
        /// </summary>
        public string? documentid { get; set; } = null;

        /// <summary>
        /// Status
        /// </summary>
        public string status { get; set; } = string.Empty;
    }
}