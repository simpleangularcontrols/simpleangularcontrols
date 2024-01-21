using Microsoft.AspNetCore.Mvc;
using SimpleAngularControls.Api.Model;

namespace SimpleAngularControls.Api.Services
{
    /// <summary>
    /// example controlle to demonstrate grid component
    /// </summary>
    [ApiController]
    [Route("api/grid")]
    public class GridController : ControllerBase
    {
        /// <summary>
        /// static list of grid items
        /// </summary>
        public static List<GridItemDto>? Items { get; set; } = null;

        /// <summary>
        /// get methode for demonstrating grid component
        /// </summary>
        /// <param name="request">data with information for sorting and paging</param>
        /// <returns>return response to display data in grid</returns>
        [Route("items")]
        [HttpPost()]
        public GridResultDto<GridItemDto> GetItems([FromBody] GridRequest request)
        {
            // create items if not exists
            if (Items == null)
            {
                Random random = new Random();
                Items = new List<GridItemDto>();
                for (int i = 1; i < 200; i++)
                {
                    Items.Add(new GridItemDto()
                    {
                        Id = i,
                        Bezeichnung = $"Element {i}",
                        Image = $"Bild {random.Next(1, 2000)}"
                    });
                }
            }

            int startingPoint = request.NewPageIndex * request.PageSize;

            if (startingPoint > Items.Count)
                startingPoint = Items.Count - (Items.Count % request.PageSize);

            // disable sorting if sort key is null
            if (request.SortKey == null)
                return new GridResultDto<GridItemDto>()
                {
                    TotalRowCount = Items.Count,
                    Data = Items.Skip(startingPoint).Take(request.PageSize).ToList()
                };

            // handle sort
            switch (request.SortDirection)
            {
                case SortOrder.None:
                    return new GridResultDto<GridItemDto>()
                    {
                        TotalRowCount = Items.Count,
                        Data = Items.Skip(startingPoint).Take(request.PageSize).ToList()
                    };

                case SortOrder.Ascending:
                    var orderItem = typeof(GridItemDto).GetProperty(request.SortKey);

                    if (orderItem == null)
                        throw new InvalidDataException("SortKey is invalid");

                    return new GridResultDto<GridItemDto>()
                    {
                        TotalRowCount = Items.Count,
                        Data = Items.OrderBy(itm => orderItem.GetValue(itm, null)).Skip(startingPoint).Take(request.PageSize).ToList()
                    };

                case SortOrder.Descending:
                    var orderItemDescending = typeof(GridItemDto).GetProperty(request.SortKey);

                    if (orderItemDescending == null)
                        throw new InvalidDataException("SortKey is invalid");

                    return new GridResultDto<GridItemDto>()
                    {
                        TotalRowCount = Items.Count,
                        Data = Items.OrderByDescending(itm => orderItemDescending.GetValue(itm, null)).Skip(startingPoint).Take(request.PageSize).ToList()
                    };

                default:
                    throw new ArgumentException("Invalid SortDirection");
            }
        }
    }
}