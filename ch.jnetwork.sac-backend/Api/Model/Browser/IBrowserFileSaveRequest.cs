using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleAngularControls.Api.Model.Browser
{
    /// <summary>
    /// Interface für Request, wenn Temp Upload definitiv gespeichert werden soll.
    /// </summary>
    public interface IBrowserFileSaveRequest
    {
        /// <summary>
        /// Pfad in welchem das File gespeichert werden soll
        /// </summary>
        string Path { get; set; }
        /// <summary>
        /// Upload ID des Files welches verschoben werden soll
        /// </summary>
        string UploadId { get; set; }
    }
}
