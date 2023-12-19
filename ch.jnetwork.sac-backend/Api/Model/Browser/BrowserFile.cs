namespace AngularPrototype.Api.Model.Browser
{
    public class BrowserFile : IBrowserFile
    {
        public string Filename { get; set; }

        public long Size { get; set; }
    }
}