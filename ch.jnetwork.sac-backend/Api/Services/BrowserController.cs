using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SimpleAngularControls.Api.Model.Browser;
using System.Net;
using System.Net.Http.Headers;

namespace SimpleAngularControls.Api.Services
{
    /// <summary>
    /// example backend api for browser component
    /// </summary>
    [ApiController]
    [Route("api/browser", Name = "BrowserApi")]
    public class BrowserController : ControllerBase
    {
        /// <summary>
        /// Basis Pfad für Node
        /// </summary>
        private readonly string basePath;

        /// <summary>
        /// Temp Path for Chunked File Upload
        /// </summary>
        private readonly string uploadTempPath = "upload/temp";

        /// <summary>
        /// Hosting Environment
        /// </summary>
        private readonly IWebHostEnvironment webHostEnvironment;

        /// <summary>
        /// Konstruktor
        /// </summary>
        /// <param name="webHostEnvironment">Hosting Environment</param>
        public BrowserController(IWebHostEnvironment webHostEnvironment)
        {
            this.basePath = Path.GetFullPath(Path.Combine(webHostEnvironment.ContentRootPath, "upload/browser"));
            this.webHostEnvironment = webHostEnvironment;
        }

        [HttpPost("getfiles")]
        public IBrowserFilesResponse GetFiles([FromBody] BrowserNodeRequest request)
        {
            this.ValidatePath(request.Path);

            if (request.Path.StartsWith("/"))
                request.Path = request.Path.TrimStart('/');

            if (request.Path.StartsWith("\\"))
                request.Path = request.Path.TrimStart('\\');

            string path = Path.Combine(basePath, request.Path);

            DirectoryInfo directory = new DirectoryInfo(path);
            Func<FileInfo, bool> filter = this.GetExtensionFilter(this.CreateExtensionList(request.AllowedTypes));

            return new BrowserFilesResponse()
            {
                Files = directory.GetFiles().Where(filter).Select(x => new BrowserFile()
                {
                    Filename = x.Name,
                    Size = x.Length
                }).Cast<IBrowserFile>().ToList()
            };
        }

        [HttpPost("deletefile")]
        public IBrowserFilesResponse DeleteFile([FromBody] BrowserFileDeleteRequest request)
        {
            this.ValidatePath(request.Path);

            if (request.Path.StartsWith("/"))
                request.Path = request.Path.TrimStart('/');

            if (request.Path.StartsWith("\\"))
                request.Path = request.Path.TrimStart('\\');

            string path = Path.Combine(basePath, request.Path);

            if (System.IO.File.Exists(path))
            {
                System.IO.File.Delete(path);
            }

            return GetFiles(new BrowserNodeRequest()
            {
                Path = Path.GetDirectoryName(request.Path) ?? throw new InvalidOperationException("Path is invalid"),
                AllowedTypes = request.AllowedTypes
            });
        }

        [HttpPut("renamefile")]
        public IBrowserFilesResponse RenameFile([FromBody] BrowserFileRenameRequest request)
        {
            this.ValidatePath(request.Path);

            if (request.Path.StartsWith("/"))
                request.Path = request.Path.TrimStart('/');

            if (request.Path.StartsWith("\\"))
                request.Path = request.Path.TrimStart('\\');

            string path = Path.Combine(basePath, request.Path);
            string newFile = this.ValidateFilename(Path.Combine(Path.GetDirectoryName(path) ?? throw new InvalidOperationException("Path is invalid"), request.NewFilename));

            if (System.IO.File.Exists(path))
            {
                System.IO.File.Move(path, newFile);
            }

            return GetFiles(new BrowserNodeRequest()
            {
                Path = Path.GetDirectoryName(request.Path) ?? throw new InvalidOperationException("Path is invalid"),
                AllowedTypes = request.AllowedTypes
            });
        }

        /// <summary>
        /// Get Nodes
        /// </summary>
        /// <param name="request">Node Request</param>
        /// <returns>Node Item</returns>
        [HttpPost("getnodes")]
        public IBrowserNodeResponse GetNode([FromBody] BrowserNodeRequest request)
        {
            this.ValidatePath(request.Path);

            if (request.Path.StartsWith("/"))
                request.Path = request.Path.TrimStart('/');

            if (request.Path.StartsWith("\\"))
                request.Path = request.Path.TrimStart('\\');

            string path = Path.Combine(basePath, request.Path);

            DirectoryInfo directory = new DirectoryInfo(path);
            BrowserNode browserNode = new BrowserNode();

            browserNode.Name = directory.Name;
            this.FillChilds(directory, browserNode);
            Func<FileInfo, bool> filter = this.GetExtensionFilter(this.CreateExtensionList(request.AllowedTypes));

            browserNode.Files = directory.GetFiles().Where(filter).Select(x => new BrowserFile()
            {
                Filename = x.Name,
                Size = x.Length
            }).Cast<IBrowserFile>().ToList();

            return new BrowserNodeResponse()
            {
                Node = browserNode
            };
        }

        /// <summary>
        /// Erstellt einen neuen Ordner
        /// </summary>
        /// <param name="request">Request Model zum anlegen des neuen Ordners</param>
        /// <returns>Daten mit dem neuen Ordner</returns>
        [HttpPost("newnode")]
        public IBrowserNodeResponse NewNode([FromBody] BrowserNodeNewRequest request)
        {
            this.ValidatePath(request.Path);

            if (request.Path.StartsWith("/"))
                request.Path = request.Path.TrimStart('/');

            if (request.Path.StartsWith("\\"))
                request.Path = request.Path.TrimStart('\\');

            string path = Path.Combine(basePath, request.Path);
            string folder = this.ValidateFoldername(Path.Combine(path, request.NewFoldername));

            if (!Directory.Exists(folder))
            {
                Directory.CreateDirectory(folder);
            }

            return GetNode(new BrowserNodeRequest()
            {
                Path = $"{request.Path}/{Path.GetFileName(folder)}"
            });
        }

        /// <summary>
        /// Benennt einen bestehenden Ordner um
        /// </summary>
        /// <param name="request">Request Model zum umbenennen des Ordners</param>
        /// <returns>Daten mit neuen Ordner Daten</returns>
        [HttpPut("renamenode")]
        public IBrowserNodeResponse RenameNode([FromBody] BrowserNodeRenameRequest request)
        {
            this.ValidatePath(request.Path);

            if (request.Path.StartsWith("/"))
                request.Path = request.Path.TrimStart('/');

            if (request.Path.StartsWith("\\"))
                request.Path = request.Path.TrimStart('\\');

            string path = Path.Combine(basePath, request.Path);
            string newFolder = this.ValidateFoldername(Path.Combine(Path.GetDirectoryName(path) ?? throw new InvalidOperationException("Path is invalid"), request.NewFoldername));

            if (Directory.Exists(path) && !Directory.Exists(newFolder))
            {
                Directory.Move(path, newFolder);
            }

            return GetNode(new BrowserNodeRequest()
            {
                Path = $"{Path.GetDirectoryName(path)}/{Path.GetFileName(newFolder)}"
            });
        }

        /// <summary>
        /// Löscht einen Ordner inkl. der Struktur
        /// </summary>
        /// <param name="request">Request Model zum löschen des Ordners</param>
        /// <returns></returns>
        [HttpPost("deletenode")]
        public IBrowserNodeResponse DeleteNode([FromBody] BrowserNodeDeleteRequest request)
        {
            this.ValidatePath(request.Path);

            if (request.Path.StartsWith("/"))
                request.Path = request.Path.TrimStart('/');

            if (request.Path.StartsWith("\\"))
                request.Path = request.Path.TrimStart('\\');

            string path = Path.Combine(basePath, request.Path);

            if (Directory.Exists(path))
            {
                Directory.Delete(path, true);
            }

            string parentFolder = String.Join("/", request.Path.Split('\\', '/', StringSplitOptions.RemoveEmptyEntries).Reverse().Skip(1).Reverse());

            return GetNode(new BrowserNodeRequest()
            {
                Path = parentFolder
            });
        }

        #region Upload

        /// <summary>
        /// File für Upload registrieren
        /// </summary>
        /// <param name="register">Registrierung Metadaten</param>
        /// <returns>HTTP Response mit URL für File</returns>
        [HttpPost("uploadregister")]
        public IActionResult UploadRegister([FromBody] BrowserUploadRegisterRequest request)
        {
            Guid guid = Guid.NewGuid();
            string file = Path.GetFullPath(Path.Combine(webHostEnvironment.ContentRootPath, uploadTempPath, $"{guid}.meta"));

            // MetaData setzen
            string metadata = JsonConvert.SerializeObject(request);
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
        [HttpPut("uploadfile/{id}")]
        [Consumes("application/octet-stream")]
        public IActionResult GetFile(string id)
        {
            ObjectResult response;

            string fileContent = Path.GetFullPath(Path.Combine(webHostEnvironment.ContentRootPath, uploadTempPath, $"{id}.dat"));
            string fileMeta = Path.GetFullPath(Path.Combine(webHostEnvironment.ContentRootPath, uploadTempPath, $"{id}.meta"));

            using (MemoryStream bodyStream = new MemoryStream())
            {
                HttpContext.Request.Body.CopyToAsync(bodyStream).Wait();

                // Non Chunking Upload
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

                            BrowserUploadRegisterRequest? uploadRegister = JsonConvert.DeserializeObject<BrowserUploadRegisterRequest>(metadata);

                            if (uploadRegister == null)
                                throw new InvalidDataException("Cannot deserialize metadata file");

                            RangeHeaderValue rangeHeaderValue = new RangeHeaderValue(0, uploadRegister.byteswritten);
                            Response.Headers.Add("Range", rangeHeaderValue.ToString());
                            response = new ObjectResult("Resume Incomplete");
                            response.StatusCode = (int)HttpStatusCode.PermanentRedirect;
                        }
                        fileStream.Close();
                    }
                    return response;
                }

                using (Stream stream = new FileStream(fileContent, !System.IO.File.Exists(fileContent) ? FileMode.Create : FileMode.Append, FileAccess.Write, FileShare.Read))
                {
                    using (BinaryWriter writer = new BinaryWriter(stream))
                    {
                        writer.Write(bodyStream.ToArray());
                    }
                }

                ContentRangeHeaderValue contentRangeHeader = ContentRangeHeaderValue.Parse(Request.Headers.ContentRange);

                if (!contentRangeHeader.To.HasValue)
                    throw new InvalidDataException("Missing 'To' value in range header");

                if (!contentRangeHeader.Length.HasValue)
                    throw new InvalidDataException("Missing 'Length' value in range header");

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
        [HttpDelete("uploadfile/{id}")]
        public IActionResult DeleteUploadTempFile(string id)
        {
            string fileContent = Path.GetFullPath(Path.Combine(webHostEnvironment.ContentRootPath, uploadTempPath, $"{id}.dat"));
            string fileMeta = Path.GetFullPath(Path.Combine(webHostEnvironment.ContentRootPath, uploadTempPath, $"{id}.meta"));

            if (System.IO.File.Exists(fileContent))
                System.IO.File.Delete(fileContent);

            if (System.IO.File.Exists(fileMeta))
                System.IO.File.Delete(fileMeta);

            return NoContent();
        }

        [HttpPost("uploadfile")]
        public IBrowserFilesResponse SaveFile([FromBody] BrowserFileSaveRequest request)
        {
            this.ValidatePath(request.Path);

            if (request.Path.StartsWith("/"))
                request.Path = request.Path.TrimStart('/');

            if (request.Path.StartsWith("\\"))
                request.Path = request.Path.TrimStart('\\');

            string path = Path.Combine(basePath, request.Path);

            string fileContent = Path.GetFullPath(Path.Combine(webHostEnvironment.ContentRootPath, uploadTempPath, $"{request.UploadId}.dat"));
            string fileMeta = Path.GetFullPath(Path.Combine(webHostEnvironment.ContentRootPath, uploadTempPath, $"{request.UploadId}.meta"));

            if (System.IO.File.Exists(fileMeta))
            {
                using (FileStream fileStream = new FileStream(fileMeta, FileMode.Open, FileAccess.ReadWrite, FileShare.Read))
                {
                    using (StreamReader reader = new StreamReader(fileStream))
                    {
                        string metadata = reader.ReadToEnd();
                        reader.Close();

                        BrowserUploadRegisterRequest? uploadRegister = JsonConvert.DeserializeObject<BrowserUploadRegisterRequest>(metadata);

                        if (uploadRegister == null)
                            throw new InvalidDataException("Cannot deserialize metadata");

                        string filename = this.ValidateFilename(Path.Combine(path, uploadRegister.name));
                        System.IO.File.Copy(fileContent, filename);
                    }
                }

                // Clean Upload Temp
                DeleteUploadTempFile(request.UploadId);
            }

            return GetFiles(new BrowserNodeRequest()
            {
                Path = request.Path,
                AllowedTypes = request.AllowedTypes
            });
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
                BrowserUploadRegisterRequest? uploadRegister = JsonConvert.DeserializeObject<BrowserUploadRegisterRequest>(metadata);

                if (uploadRegister == null)
                    uploadRegister = new BrowserUploadRegisterRequest();

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
        private BrowserUploadStateResponse GetDocumentResponse(string id)
        {
            BrowserUploadStateResponse registration = new BrowserUploadStateResponse();
            registration.documentid = id.ToString();
            registration.status = "done";
            return registration;
        }

        /// <summary>
        /// Response wenn Upload noch nicht Komplett
        /// </summary>
        /// <returns>Response für Uploader Komponente</returns>
        private BrowserUploadStateResponse GetDocumentIncomplete()
        {
            BrowserUploadStateResponse registration = new BrowserUploadStateResponse();
            registration.documentid = null;
            registration.status = "incomplete";
            return registration;
        }

        #endregion Upload

        private void FillChilds(DirectoryInfo directory, BrowserNode node)
        {
            DirectoryInfo[] subdirectories = directory.GetDirectories();
            node.ChildNodes = new List<IBrowserNode>(subdirectories.Length);

            foreach (DirectoryInfo subdirectory in subdirectories)
            {
                BrowserNode subnode = new BrowserNode();
                subnode.Name = subdirectory.Name;
                node.ChildNodes.Add(subnode);

                this.FillChilds(subdirectory, subnode);
            }
        }

        private void ValidatePath(string path)
        {
            if (path.StartsWith(".."))
                throw new InvalidDataException("Path is not allowed!");

            if (path.IndexOf("..") >= 0)
                throw new InvalidDataException("Path is not allowed!");
        }

        private string ValidateFilename(string file)
        {
            int count = 1;

            string fileNameOnly = Path.GetFileNameWithoutExtension(file);
            string extension = Path.GetExtension(file);
            string path = Path.GetDirectoryName(file) ?? throw new InvalidOperationException("Directory in file is null or invalid");
            string newFile = file;

            while (System.IO.File.Exists(newFile))
            {
                string tempFileName = string.Format("{0}({1})", fileNameOnly, count++);
                newFile = Path.Combine(path, tempFileName + extension);
            }

            return newFile;
        }

        private string ValidateFoldername(string folder)
        {
            int count = 1;

            string foldername = Path.GetFileName(folder);
            string path = Path.GetDirectoryName(folder) ?? throw new InvalidOperationException("Directory in file is null or invalid");
            string newFolder = folder;

            while (Directory.Exists(newFolder))
            {
                string tempFileName = string.Format("{0}({1})", foldername, count++);
                newFolder = Path.Combine(path, tempFileName);
            }

            return newFolder;
        }

        private string[] CreateExtensionList(string allowedExtensions)
        {
            if (string.IsNullOrWhiteSpace(allowedExtensions))
                return new string[0];
            else
            {
                return allowedExtensions.Split(',', '|', StringSplitOptions.RemoveEmptyEntries);
            }
        }

        private Func<FileInfo, bool> GetExtensionFilter(string[] allowedExtensions)
        {
            if (allowedExtensions.Length == 0)
                return x => true;
            else
                return x => allowedExtensions.Select(filter => filter.ToLower()).Contains(x.Extension.ToLower());
        }
    }
}