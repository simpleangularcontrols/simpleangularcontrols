using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularPrototype.Api.Model
{
    public class GridResultDto<T>
    {
        public int TotalRowCount { get; set; }

        public List<T> Data { get; set; } = new List<T>();
    }
}