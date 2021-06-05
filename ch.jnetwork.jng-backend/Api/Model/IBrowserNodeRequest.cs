namespace AngularPrototype.Api.Model
{
    /// <summary>
    /// Interface für Request von Daten zu Node
    /// </summary>
    public interface IBrowserNodeRequest
    {
        /// <summary>
        /// Pfad welcher geladen werden soll
        /// </summary>
        string Path { get; }
    }
}