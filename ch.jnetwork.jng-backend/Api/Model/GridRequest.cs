using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularPrototype.Api.Model
{
    public enum SortOrder : int
    {
        None = 0,
        Ascending = 1,
        Descending = 2
    }

    public class GridRequest
    {
        public int NewPageIndex { get; set; }
        public int PageSize { get; set; }
        public string SortKey { get; set; }
        public SortOrder SortDirection { get; set; }
    }
}