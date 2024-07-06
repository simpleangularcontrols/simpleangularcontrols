namespace SimpleAngularControls.Api.Model
{
    public enum SortOrder
    {
        None = 0,
        Ascending = 1,
        Descending = 2
    }

    public class GridRequest
    {
        public int NewPageIndex { get; set; }
        public int PageSize { get; set; }
        public string? SortKey { get; set; } = null;
        public SortOrder SortDirection { get; set; }
    }
}