namespace SimpleAngularControls.Api.Model.Browser
{
    /// <summary>
    /// Response auf GetNode Request für File Browser
    /// </summary>
    public interface IBrowserNodeResponse
    {
        /// <summary>
        /// Daten zu angefordertem Node
        /// </summary>
        BrowserNode Node { get; set; }
    }
}