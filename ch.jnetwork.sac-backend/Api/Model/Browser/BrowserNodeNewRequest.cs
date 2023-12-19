namespace AngularPrototype.Api.Model.Browser
{
    /// <summary>
    /// Request zum anlegen eines neuen Ordners
    /// </summary>
    public class BrowserNodeNewRequest
    {
        /// <summary>
        /// Pfad in welchem der Ordner erstellt werden soll
        /// </summary>
        public string Path { get; set; }
        /// <summary>
        /// Neuer Name des Ordners
        /// </summary>
        public string NewFoldername { get; set; }
    }
}