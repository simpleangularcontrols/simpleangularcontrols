namespace SimpleAngularControls.Api.Model
{
    public class GridResultDto<T>
    {
        public int TotalRowCount { get; set; }

        public List<T> Data { get; set; } = new List<T>();
    }
}