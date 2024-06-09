using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularPrototype.Api.Model
{
    /// <summary>
    /// Registrations Message für Upload
    /// </summary>
    public class UploadedFileDto
    {
        /// <summary>
        /// Mime Type
        /// </summary>
        public string mimeType { get; set; }
        /// <summary>
        /// Filename
        /// </summary>
        public string name { get; set; }
        /// <summary>
        /// Bytes des Files
        /// </summary>
        public long byteswritten { get; set; }
    }
}