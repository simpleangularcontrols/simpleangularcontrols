using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SimpleAngularControls.Api.Model;
using System.Net;
using System.Net.Http.Headers;

namespace SimpleAngularControls.Api.Services
{
    /// <summary>
    /// Example backend for the upload component
    /// </summary>
    [ApiController]
    [Route("api/upload", Name = "UploadApi")]
    public class UploadController : ControllerBase
    {
        /// <summary>
        /// Hosting Environment
        /// </summary>
        private readonly IWebHostEnvironment webHostEnvironment;

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="webHostEnvironment">Instance of Hosting Environment</param>
        public UploadController(IWebHostEnvironment webHostEnvironment)
        {
            this.webHostEnvironment = webHostEnvironment;
        }

        /// <summary>
        /// Register file for upload
        /// </summary>
        /// <param name="register">Registration metadata</param>
        /// <returns>HTTP Status Created with Location URL for upload of URL</returns>
        [HttpPost("register")]
        public IActionResult UploadFile([FromBody] UploadedFileDto register)
        {
            Guid guid = Guid.NewGuid();
            string uploadTempPath = "upload";
            string file = Path.GetFullPath(Path.Combine(webHostEnvironment.ContentRootPath, uploadTempPath, "temp", $"{guid}.meta"));

            // MetaData setzen
            string metadata = JsonConvert.SerializeObject(register);
            using (FileStream fileStream = new FileStream(file, FileMode.CreateNew, FileAccess.ReadWrite, FileShare.Read))
            {
                using (StreamWriter writer = new StreamWriter(fileStream))
                {
                    writer.Write(metadata);
                    writer.Close();
                }
                fileStream.Close();
            }

            return CreatedAtAction(nameof(GetFile), new { Id = guid.ToString() }, guid);
        }

        /// <summary>
        /// Upload method for file
        /// </summary>
        /// <param name="id">Upload registration Id. Id must be created by "register"</param>
        /// <returns>Returns the status 200 when the upload is complete or a status 308 with range information if the upload is not yet complete.</returns>
        [HttpPut("file/{id}")]
        [Consumes("application/octet-stream")]
        public IActionResult GetFile(string id)
        {
            ObjectResult response;

            string uploadTempPath = "upload";
            string fileContent = Path.Combine(webHostEnvironment.ContentRootPath, uploadTempPath, "temp", $"{id}.dat");
            string fileMeta = Path.Combine(webHostEnvironment.ContentRootPath, uploadTempPath, "temp", $"{id}.meta");

            // Non Chunking Upload
            using (MemoryStream bodyStream = new MemoryStream())
            {
                HttpContext.Request.Body.CopyToAsync(bodyStream).Wait();

                if (!Request.Headers.ContainsKey("content-range"))
                {
                    using (Stream contentStream = new FileStream(fileContent, FileMode.OpenOrCreate, FileAccess.ReadWrite, FileShare.Read))
                    {
                        using (BinaryWriter contentWriter = new BinaryWriter(contentStream))
                        {
                            contentWriter.Write(bodyStream.ToArray());
                            contentWriter.Close();

                            using (FileStream metaFileStream = new FileStream(fileMeta, FileMode.CreateNew, FileAccess.ReadWrite, FileShare.Read))
                            {
                                this.UpdateBytesWritten(metaFileStream, bodyStream.Length);
                                metaFileStream.Close();
                            }

                            response = new ObjectResult(this.GetDocumentResponse(id));
                            response.StatusCode = (int)HttpStatusCode.OK;
                            return response;
                        }
                    }
                }

                // resume call. return resume data to client
                if (bodyStream.Length == 0)
                {
                    using (FileStream fileStream = new FileStream(fileMeta, FileMode.Open, FileAccess.ReadWrite, FileShare.Read))
                    {
                        using (StreamReader reader = new StreamReader(fileStream))
                        {
                            string metadata = reader.ReadToEnd();
                            reader.Close();

                            UploadedFileDto? uploadRegister = JsonConvert.DeserializeObject<UploadedFileDto>(metadata);

                            if (uploadRegister == null)
                                throw new InvalidCastException("Cannot deserialize metadata from existing upload");

                            RangeHeaderValue rangeHeaderValue = new RangeHeaderValue(0, uploadRegister.byteswritten);
                            Response.Headers.Add("Range", rangeHeaderValue.ToString());
                            response = new ObjectResult("Resume Incomplete");
                            response.StatusCode = (int)HttpStatusCode.PermanentRedirect;
                            return response;
                        }
                    }
                }

                // write body content to da
                using (Stream stream = new FileStream(fileContent, !System.IO.File.Exists(fileContent) ? FileMode.Create : FileMode.Append, FileAccess.Write, FileShare.Read))
                {
                    using (BinaryWriter writer = new BinaryWriter(stream))
                    {
                        writer.Write(bodyStream.ToArray());
                    }
                }

                ContentRangeHeaderValue contentRangeHeader = ContentRangeHeaderValue.Parse(Request.Headers.ContentRange);

                if (!contentRangeHeader.To.HasValue)
                    throw new InvalidOperationException("Content-Range header missing 'to' bytes value");

                if (!contentRangeHeader.Length.HasValue)
                    throw new InvalidOperationException("Content-Range header missing total content length value");

                // update meta data
                using (FileStream metaFileStream = new FileStream(fileMeta, FileMode.OpenOrCreate, FileAccess.ReadWrite, FileShare.Read))
                {
                    this.UpdateBytesWritten(metaFileStream, contentRangeHeader.To.Value);
                }

                // return state to client
                if (contentRangeHeader.To.Value < contentRangeHeader.Length.Value - 1)
                {
                    RangeHeaderValue rangeHeaderValue = new RangeHeaderValue(0, contentRangeHeader.To.Value);
                    Response.Headers.Add("Range", rangeHeaderValue.ToString());
                    response = new ObjectResult(this.GetDocumentIncomplete());
                    response.StatusCode = (int)HttpStatusCode.PermanentRedirect;
                    return response;
                }
                else
                {
                    return Ok(this.GetDocumentResponse(id));
                }
            }
        }

        /// <summary>
        /// Deletes a file in the temporary file on the server
        /// </summary>
        /// <param name="id">Upload registration Id. Id must be created by "register"</param>
        /// <returns>HTTP status 201 if successfully deleted</returns>
        [HttpDelete("file/{id}")]
        public IActionResult DeleteFile(string id)
        {
            string uploadTempPath = "upload";

            string fileContent = Path.Combine(webHostEnvironment.ContentRootPath, uploadTempPath, "temp", $"{id}.dat");
            string fileMeta = Path.Combine(webHostEnvironment.ContentRootPath, uploadTempPath, "temp", $"{id}.meta");

            if (System.IO.File.Exists(fileContent))
                System.IO.File.Delete(fileContent);

            if (System.IO.File.Exists(fileMeta))
                System.IO.File.Delete(fileMeta);

            return new NoContentResult();
        }

        /// <summary>
        /// Updates the MetaDate file
        /// </summary>
        /// <param name="metaFileStream">FileStream to meta data file</param>
        /// <param name="bytesWritten">Data written to data file</param>
        private void UpdateBytesWritten(FileStream metaFileStream, long bytesWritten)
        {
            using (StreamReader metaReader = new StreamReader(metaFileStream))
            {
                string metadata = metaReader.ReadToEnd();
                UploadedFileDto? uploadRegister = JsonConvert.DeserializeObject<UploadedFileDto>(metadata);

                if (uploadRegister == null)
                    uploadRegister = new UploadedFileDto();

                uploadRegister.byteswritten = bytesWritten;

                using (StreamWriter metaWriter = new StreamWriter(metaFileStream))
                {
                    metaFileStream.Seek(0, SeekOrigin.Begin);
                    metaWriter.Write(JsonConvert.SerializeObject(uploadRegister));
                    metaWriter.Close();
                }
            }
        }

        /// <summary>
        /// Generates a response when a file has been completely uploaded.
        /// </summary>
        /// <param name="id">Upload Id</param>
        /// <returns>Response for uploader component</returns>
        private IUploadRegistration GetDocumentResponse(string id)
        {
            UploadRegistration registration = new UploadRegistration();
            registration.documentid = id.ToString();
            registration.status = "done";
            return registration;
        }

        /// <summary>
        /// Response if upload not yet complete
        /// </summary>
        /// <returns>Response for uploader component</returns>
        private IUploadRegistration GetDocumentIncomplete()
        {
            UploadRegistration registration = new UploadRegistration();
            registration.documentid = null;
            registration.status = "incomplete";
            return registration;
        }
    }
}