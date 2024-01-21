using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SimpleAngularControls.Api.Model;
using System.Net;
using System.Net.Http.Headers;
using System.Text;

namespace SimpleAngularControls.Api.Services
{
    [ApiController]
    [Route("api/upload", Name = "UploadApi")]
    public class UploadController : ControllerBase
    {
        private readonly IWebHostEnvironment webHostEnvironment;

        public UploadController(IWebHostEnvironment webHostEnvironment)
        {
            this.webHostEnvironment = webHostEnvironment;
        }

        /// <summary>
        /// File für Upload registrieren
        /// </summary>
        /// <param name="register">Registrierung Metadaten</param>
        /// <returns>HTTP Response mit URL für File</returns>
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
        /// Upload Methode für File
        /// </summary>
        /// <param name="id">Upload Registrations ID</param>
        /// <returns>Upload Response. Gibt Document ID zurück wenn Upload fertig</returns>
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

                // Resume Call
                if (bodyStream.Length == 0)
                {
                    using (FileStream fileStream = new FileStream(fileMeta, FileMode.Open, FileAccess.ReadWrite, FileShare.Read))
                    {
                        using (StreamReader reader = new StreamReader(fileStream))
                        {
                            string metadata = reader.ReadToEnd();
                            reader.Close();

                            UploadedFileDto uploadRegister = JsonConvert.DeserializeObject<UploadedFileDto>(metadata);

                            RangeHeaderValue rangeHeaderValue = new RangeHeaderValue(0, uploadRegister.byteswritten);
                            Response.Headers.Add("Range", rangeHeaderValue.ToString());
                            response = new ObjectResult("Resume Incomplete");
                            response.StatusCode = (int)HttpStatusCode.PermanentRedirect;
                        }
                        fileStream.Close();
                    }
                    return response;
                }

                using (Stream stream = new FileStream(fileContent, FileMode.Create | FileMode.Append, FileAccess.Write, FileShare.Read))
                {
                    using (BinaryWriter writer = new BinaryWriter(stream))
                    {
                        writer.Write(bodyStream.ToArray());
                    }
                }

                ContentRangeHeaderValue contentRangeHeader = ContentRangeHeaderValue.Parse(Request.Headers.ContentRange);

                using (FileStream metaFileStream = new FileStream(fileMeta, FileMode.OpenOrCreate, FileAccess.ReadWrite, FileShare.Read))
                {
                    this.UpdateBytesWritten(metaFileStream, contentRangeHeader.To.Value);
                }

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
        /// Löscht ein File im Temp. File auf dem Server
        /// </summary>
        /// <param name="id">Upload ID</param>
        /// <returns>Status wenn File gelöscht</returns>
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
        ///
        /// </summary>
        /// <param name="metaFileStream"></param>
        /// <param name="bytesWritten"></param>
        private void UpdateBytesWritten(FileStream metaFileStream, long bytesWritten)
        {
            using (StreamReader metaReader = new StreamReader(metaFileStream))
            {
                string metadata = metaReader.ReadToEnd();
                UploadedFileDto uploadRegister = JsonConvert.DeserializeObject<UploadedFileDto>(metadata);

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
        /// Erzeugt eine Response wenn ein File komplett hochgeladen wurde.
        /// </summary>
        /// <param name="id">Upload ID</param>
        /// <returns>Response für Uploader Komponente</returns>
        private UploadRegistration GetDocumentResponse(string id)
        {
            UploadRegistration registration = new UploadRegistration();
            registration.documentid = id.ToString();
            registration.status = "done";
            return registration;
        }

        /// <summary>
        /// Response wenn Upload noch nicht Komplett
        /// </summary>
        /// <returns>Response für Uploader Komponente</returns>
        private UploadRegistration GetDocumentIncomplete()
        {
            UploadRegistration registration = new UploadRegistration();
            registration.documentid = null;
            registration.status = "incomplete";
            return registration;
        }
    }
}