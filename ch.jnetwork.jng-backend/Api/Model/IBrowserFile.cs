namespace AngularPrototype.Api.Model
{
    /// <summary>
    /// Interface für File
    /// </summary>
    public interface IBrowserFile
    {
        /// <summary>
        /// Filename
        /// </summary>
         string Filename { get; }

        /// <summary>
        /// Grösse des Files
        /// </summary>
         long Size { get; }
    }
}