namespace SimpleAngularControls.Api.Model.Browser
{
    /// <summary>
    /// Request für Rename von File
    /// </summary>
    public class BrowserFileRenameRequest
    {
        /// <summary>
        /// File welches umbenennt werden soll
        /// </summary>
        public string Path { get; set; }
        /// <summary>
        /// Neuer Dateiname
        /// </summary>
        public string NewFilename { get; set; }
        /// <summary>
        /// Filter nach Datei Erweiterung
        /// </summary>
        public string AllowedTypes { get; set; }

    }
}