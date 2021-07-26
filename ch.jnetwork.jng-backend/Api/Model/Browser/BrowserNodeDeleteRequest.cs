namespace AngularPrototype.Api.Model.Browser
{
    /// <summary>
    /// Request zum löschen eines Ordners
    /// </summary>
    public class BrowserNodeDeleteRequest
    {
        /// <summary>
        /// Ordner welcher gelöscht werden soll
        /// </summary>
        public string Path { get; set; }
    }
}