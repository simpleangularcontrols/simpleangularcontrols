namespace AngularPrototype.Api.Model.Browser
{
    /// <summary>
    /// Response auf GetNode Request für File Browser
    /// </summary>
    public class BrowserNodeResponse : IBrowserNodeResponse
    {
        /// <summary>
        /// Daten zu angefordertem Node
        /// </summary>
        public BrowserNode Node { get; set; }
    }
}