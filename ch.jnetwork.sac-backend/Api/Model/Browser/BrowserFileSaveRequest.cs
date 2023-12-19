namespace AngularPrototype.Api.Model.Browser
{
    /// <summary>
    /// Request zum Speichern einer Hochgeladenen Datei
    /// </summary>
    public class BrowserFileSaveRequest : IBrowserFileSaveRequest
    {
        /// <summary>
        /// Pfad in welchem die Datei gespeichert wird
        /// </summary>
        public string Path { get; set; }
        /// <summary>
        /// Upload ID
        /// </summary>
        public string UploadId { get; set; }
        /// <summary>
        /// Filter nach Datei Erweiterung
        /// </summary>
        public string AllowedTypes { get; set; }
    }
}