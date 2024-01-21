using Microsoft.AspNetCore.Mvc;
using SimpleAngularControls.Api.Model;

namespace SimpleAngularControls.Api.Services
{
    [ApiController]
    [Route("api/grid")]
    public class GridController : ControllerBase
    {
        public static List<GridItemDto> Items { get; set; } = null;

        [Route("items")]
        [HttpPost()]
        public GridResultDto<GridItemDto> GetItems([FromBody] GridRequest request)
        {
            List<GridItemDto> items;

            if (Items == null)
            {
                Random random = new Random();
                items = new List<GridItemDto>();
                for (int i = 1; i < 200; i++)
                {
                    items.Add(new GridItemDto()
                    {
                        Id = i,
                        Bezeichnung = $"Element {i}",
                        Image = $"Bild {random.Next(1, 2000)}"
                    });
                }

                Items = items;
            }
            else
            {
                items = Items;
            }

            int startingPoint = request.NewPageIndex * request.PageSize;

            if (startingPoint > items.Count)
                startingPoint = items.Count - (items.Count % request.PageSize);

            switch (request.SortDirection)
            {
                case SortOrder.None:
                    return new GridResultDto<GridItemDto>()
                    {
                        TotalRowCount = items.Count,
                        Data = items.Skip(startingPoint).Take(request.PageSize).ToList()
                    };

                case SortOrder.Ascending:
                    var orderItem = typeof(GridItemDto).GetProperty(request.SortKey);
                    return new GridResultDto<GridItemDto>()
                    {
                        TotalRowCount = items.Count,
                        Data = items.OrderBy(itm => orderItem.GetValue(itm, null)).Skip(startingPoint).Take(request.PageSize).ToList()
                    };

                case SortOrder.Descending:
                    var orderItemDescending = typeof(GridItemDto).GetProperty(request.SortKey);
                    return new GridResultDto<GridItemDto>()
                    {
                        TotalRowCount = items.Count,
                        Data = items.OrderByDescending(itm => orderItemDescending.GetValue(itm, null)).Skip(startingPoint).Take(request.PageSize).ToList()
                    };

                default:
                    throw new ArgumentException("Invalid SortDirection");
            }
        }
    }
}