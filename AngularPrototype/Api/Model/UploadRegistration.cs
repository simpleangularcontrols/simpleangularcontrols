using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularPrototype.Api.Model
{

    /// <summary>
    /// Response Object für Upload Registration mit ID für Server Model
    /// </summary>
    public class UploadRegistration
    {
        /// <summary>
        /// Document ID für Service
        /// </summary>
        public string documentid { get; set; }
        /// <summary>
        /// Status
        /// </summary>
        public string status { get; set; }
    }
}