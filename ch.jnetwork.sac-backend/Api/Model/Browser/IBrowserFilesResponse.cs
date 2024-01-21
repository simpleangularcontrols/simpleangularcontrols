﻿using System.Collections.Generic;

namespace SimpleAngularControls.Api.Model.Browser
{
    /// <summary>
    /// Interface für Response auf GetFiles Request
    /// </summary>
    public interface IBrowserFilesResponse
    {
        /// <summary>
        /// List of Files
        /// </summary>
        IList<IBrowserFile> Files { get; set; }
    }
}
