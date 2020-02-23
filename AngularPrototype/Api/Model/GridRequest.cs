using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularPrototype.Api.Model
{
    public class GridRequest
    {
        public int NewPageIndex { get; set; }
        public int PageSize { get; set; }
    }
}