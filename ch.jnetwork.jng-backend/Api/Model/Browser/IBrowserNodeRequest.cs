namespace AngularPrototype.Api.Model.Browser
{
    /// <summary>
    /// Interface für Request von Daten zu Node
    /// </summary>
    public interface IBrowserNodeRequest
    {
        /// <summary>
        /// Pfad welcher geladen werden soll
        /// </summary>
        string Path { get; set; }
    }
}