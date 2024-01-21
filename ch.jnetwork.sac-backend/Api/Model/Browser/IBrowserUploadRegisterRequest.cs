namespace SimpleAngularControls.Api.Model.Browser
{
    public interface IBrowserUploadRegisterRequest
    {
        long byteswritten { get; set; }
        string mimeType { get; set; }
        string name { get; set; }
    }
}