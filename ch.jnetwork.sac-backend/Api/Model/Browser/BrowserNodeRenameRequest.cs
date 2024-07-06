namespace SimpleAngularControls.Api.Model.Browser
{
    /// <summary>
    /// Request wenn ein Ordner umbenannt werden soll
    /// </summary>
    public class BrowserNodeRenameRequest
    {
        /// <summary>
        /// Ordner welcher umbenannt werden soll
        /// </summary>
        public string Path { get; set; } = string.Empty;

        /// <summary>
        /// Neuer Name des Ordners
        /// </summary>
        public string NewFoldername { get; set; } = string.Empty;
    }
}