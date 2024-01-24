namespace SimpleAngularControls.Api.Model.Browser
{
    /// <summary>
    /// Request zum Speichern einer Hochgeladenen Datei
    /// </summary>
    public class BrowserFileSaveRequest : IBrowserFileSaveRequest
    {
        /// <summary>
        /// Pfad in welchem die Datei gespeichert wird
        /// </summary>
        public string Path { get; set; } = string.Empty;

        /// <summary>
        /// Upload ID
        /// </summary>
        public string UploadId { get; set; } = string.Empty;

        /// <summary>
        /// Filter nach Datei Erweiterung
        /// </summary>
        public string AllowedTypes { get; set; } = string.Empty;
    }
}