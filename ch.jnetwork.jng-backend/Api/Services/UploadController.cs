using AngularPrototype.Api.Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web;
using System.Web.Http;

namespace AngularPrototype.Api.Services
{
    [Route("api/upload/{action}", Name = "UploadApi")]
    public class UploadController : ApiController
    {
        /// <summary>
        /// File für Upload registrieren
        /// </summary>
        /// <param name="register">Registrierung Metadaten</param>
        /// <returns>HTTP Response mit URL für File</returns>
        [ActionName("register")]
        [HttpPost]
        public HttpResponseMessage UploadFile([FromBody] UploadedFileDto register)
        {
            HttpResponseMessage response = new HttpResponseMessage();

            Guid guid = Guid.NewGuid();
            string uploadTempPath = "~/upload";
            string file = HttpContext.Current.Server.MapPath(string.Format("{0}/temp/{1}.meta", uploadTempPath, guid));

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

            // URL für Upload zurücksenden
            string uploadUrl = this.Url.Link("UploadApi", new { Controller = "Upload", Action = "file", Id = guid.ToString() });
            
            // HACK: Replace Port für Angular Inside Apps
            uploadUrl = uploadUrl.Replace(":55768/", ":4200/");

            response.StatusCode = HttpStatusCode.Created;
            response.Headers.Add("Location", uploadUrl);

            return response;
        }

        /// <summary>
        /// Upload Methode für File
        /// </summary>
        /// <param name="id">Upload Registrations ID</param>
        /// <returns>Upload Response. Gibt Document ID zurück wenn Upload fertig</returns>
        [ActionName("file")]
        [HttpPut]
        public HttpResponseMessage GetFile(string id)
        {
            HttpResponseMessage response = new HttpResponseMessage();
            HttpRequestMessage request = this.Request;

            byte[] data = request.Content.ReadAsByteArrayAsync().Result;
            string uploadTempPath = "~/upload";
            string fileContent = HttpContext.Current.Server.MapPath(string.Format("{0}/temp/{1}.dat", uploadTempPath, id));
            string fileMeta = HttpContext.Current.Server.MapPath(string.Format("{0}/temp/{1}.meta", uploadTempPath, id));

            // Non Chunking Upload
            if (request.Content.Headers.ContentRange == null)
            {
                using (Stream contentStream = new FileStream(fileContent, FileMode.OpenOrCreate, FileAccess.ReadWrite, FileShare.Read))
                {
                    using (BinaryWriter contentWriter = new BinaryWriter(contentStream))
                    {
                        contentWriter.Write(data);
                        contentWriter.Close();

                        using (FileStream metaFileStream = new FileStream(fileMeta, FileMode.CreateNew, FileAccess.ReadWrite, FileShare.Read))
                        {
                            this.UpdateBytesWritten(metaFileStream, data.Length);
                            metaFileStream.Close();
                        }

                        response.Content = this.GetDocumentResponse(id);
                        response.StatusCode = HttpStatusCode.OK;
                    }
                }
                return response;
            }

            // Resume Call
            if (data.Length == 0)
            {
                using (FileStream fileStream = new FileStream(fileMeta, FileMode.Open, FileAccess.ReadWrite, FileShare.Read))
                {
                    using (StreamReader reader = new StreamReader(fileStream))
                    {
                        string metadata = reader.ReadToEnd();
                        reader.Close();

                        UploadedFileDto uploadRegister = JsonConvert.DeserializeObject<UploadedFileDto>(metadata);

                        response.Headers.Add("Range", string.Format("bytes=0-{0}", uploadRegister.byteswritten));
                        response.StatusCode = (HttpStatusCode)308;
                        response.Content = new StringContent("Resume Incomplete");
                    }
                    fileStream.Close();
                }
                return response;
            }

            using (Stream stream = new FileStream(fileContent, FileMode.Create | FileMode.Append, FileAccess.Write, FileShare.Read))
            {
                using (BinaryWriter writer = new BinaryWriter(stream))
                {
                    writer.Write(data);
                }
            }

            using (FileStream metaFileStream = new FileStream(fileMeta, FileMode.OpenOrCreate, FileAccess.ReadWrite, FileShare.Read))
            {
                this.UpdateBytesWritten(metaFileStream, request.Content.Headers.ContentRange.To.Value);
            }

            if (request.Content.Headers.ContentRange.To < request.Content.Headers.ContentRange.Length - 1)
            {
                response.Headers.Add("Range", string.Format("bytes=0-{0}", request.Content.Headers.ContentRange.To));
                response.StatusCode = (HttpStatusCode)308;
                response.Content = this.GetDocumentIncomplete();
            }
            else
            {
                response.Content = this.GetDocumentResponse(id);
                response.StatusCode = HttpStatusCode.OK;
            }

            return response;
        }

        /// <summary>
        /// Löscht ein File im Temp. File auf dem Server
        /// </summary>
        /// <param name="id">Upload ID</param>
        /// <returns>Status wenn File gelöscht</returns>
        [ActionName("file")]
        [HttpDelete]
        public HttpResponseMessage DeleteFile(string id)
        {
            string uploadTempPath = "~/upload";
            string fileContent = HttpContext.Current.Server.MapPath(string.Format("{0}/temp/{1}.dat", uploadTempPath, id));
            string fileMeta = HttpContext.Current.Server.MapPath(string.Format("{0}/temp/{1}.meta", uploadTempPath, id));

            if (File.Exists(fileContent))
                File.Delete(fileContent);

            if (File.Exists(fileMeta))
                File.Delete(fileMeta);

            return new HttpResponseMessage(HttpStatusCode.OK);
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
        private StringContent GetDocumentResponse(string id)
        {
            UploadRegistration registration = new UploadRegistration();
            registration.documentid = id.ToString();
            registration.status = "done";
            return new StringContent(JsonConvert.SerializeObject(registration), Encoding.UTF8, "application/json");
        }

        /// <summary>
        /// Response wenn Upload noch nicht Komplett
        /// </summary>
        /// <returns>Response für Uploader Komponente</returns>
        private StringContent GetDocumentIncomplete()
        {
            UploadRegistration registration = new UploadRegistration();
            registration.documentid = null;
            registration.status = "incomplete";
            return new StringContent(JsonConvert.SerializeObject(registration), Encoding.UTF8, "application/json");
        }
    }


}