namespace AngularPrototype.Api.Model.Browser
{
    /// <summary>
    /// Request für Daten zu einem bestimmten Node
    /// </summary>
    public class BrowserNodeRequest : IBrowserNodeRequest
    {
        /// <summary>
        /// Pfad für welchen die Daten zurückgeliefert werden sollen
        /// </summary>
        public string Path { get; set; }
        /// <summary>
        /// Erlaubte Dateierweiterungen
        /// </summary>
        public string AllowedTypes { get; set; }
    }
}