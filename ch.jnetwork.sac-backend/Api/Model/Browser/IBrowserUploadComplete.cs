namespace AngularPrototype.Api.Model.Browser
{
    /// <summary>
    /// Interface wenn File via Browser auf Server geladen wurde und Upload beendet ist und File gespeichert werden soll
    /// </summary>
    public interface IBrowserUploadComplete
    {
        /// <summary>
        /// Upload ID
        /// </summary>
        string UploadId { get; }
    }
}