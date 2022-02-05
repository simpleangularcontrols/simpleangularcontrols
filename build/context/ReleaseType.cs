/// <summary>
/// Typ des Release
/// </summary>
public enum ReleaseType
{
    /// <summary>
    /// Version nicht anpassen
    /// </summary>
    None,
    /// <summary>
    /// Version als Patch deklarieren
    /// </summary>
    Patch,
    /// <summary>
    /// Version als Minor Release deklarieren
    /// </summary>
    Minor,
    /// <summary>
    /// Version als Major Release deklarieren
    /// </summary>
    Major,
    /// <summary>
    /// Version als PreRelease markieren
    /// </summary>
    PreRelease
}