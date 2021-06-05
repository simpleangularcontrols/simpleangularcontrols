namespace AngularPrototype.Api.Model
{
    public class BrowserFile : IBrowserFile
    {
        public string Filename { get; set; }

        public long Size { get; set; }
    }
}