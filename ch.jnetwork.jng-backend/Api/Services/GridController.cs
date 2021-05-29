using AngularPrototype.Api.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace AngularPrototype.Api.Services
{
    [RoutePrefix("api/grid")]
    public class GridController : ApiController
    {
        [Route("items")]
        [HttpPost()]
        public GridResultDto<GridItemDto> GetItems(GridRequest request)
        {
            List<GridItemDto> items;

            if (!HttpContext.Current.Application.AllKeys.Contains("griddata"))
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
                HttpContext.Current.Application.Add("griddata", items);
            }
            else
            {
                items = (List<GridItemDto>)HttpContext.Current.Application.Get("griddata");
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