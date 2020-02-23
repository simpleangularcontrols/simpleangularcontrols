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
            List<GridItemDto> items = new List<GridItemDto>();
            for (int i = 1; i < 200; i++)
            {
                items.Add(new GridItemDto()
                {
                    Id = i,
                    Bezeichnung = $"Element {i}",
                    Image = $"Bild {i}"
                });
            }

            int startingPoint = request.NewPageIndex * request.PageSize;

            if (startingPoint > items.Count)
                startingPoint = items.Count - (items.Count % request.PageSize);

            return new GridResultDto<GridItemDto>()
            {
                TotalRowCount = items.Count,
                Data = items.Skip(startingPoint).Take(request.PageSize).ToList()
            };
        }
    }
}