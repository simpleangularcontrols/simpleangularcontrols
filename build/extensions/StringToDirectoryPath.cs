using Cake.Core.IO;

namespace Build.extensions
{
    /// <summary>
    /// Extension um String in Directory Path umzuwandeln
    /// </summary>
    internal static class StringToDirectoryPath
    {
        /// <summary>
        /// Erzeugt ein Directory Path aus einem String
        /// </summary>
        /// <param name="path">Pfad</param>
        /// <returns>Directory Path Objekt</returns>
        internal static DirectoryPath ToDirectoryPath(this string path) => new DirectoryPath(path);
    }
}