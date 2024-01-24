namespace SimpleAngularControls.Api.Model.Browser
{
    public class BrowserFile : IBrowserFile
    {
        public string Filename { get; set; } = string.Empty;

        public long Size { get; set; }
    }
}