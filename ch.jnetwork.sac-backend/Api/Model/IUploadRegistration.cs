namespace SimpleAngularControls.Api.Model
{
    /// <summary>
    /// Response interface for upload registration with ID for server model
    /// </summary>
    public interface IUploadRegistration
    {
        /// <summary>
        /// Document ID for service
        /// </summary>
        string? documentid { get; set; }

        /// <summary>
        /// Status
        /// </summary>
        string status { get; set; }
    }
}