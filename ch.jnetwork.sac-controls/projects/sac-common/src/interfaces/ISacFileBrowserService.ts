import { IBrowserFileResponse } from '../components/browser/models/browserfileresponse';
import { IBrowserNodeResponse } from '../components/browser/models/browsernoderesponse';
import { Observable } from 'rxjs';

/**
 * Interface for File Browser Service
 */
export interface ISacFileBrowserService {
    // #region Methods

    /**
     * Deletes a file
     * @param apiurl URL to API Service
     * @param path Path of the file to be deleted
     * @param allowedextensions Allowed extensions for files
     */
    DeleteFile(apiurl: string, path: string, allowedextensions: string): Observable<IBrowserFileResponse>;

    /**
     * Deletes a node
     * @param apiurl URL to API Service
     * @param path Path of the node to be deleted
     */
    DeleteNode(apiurl: string, path: string): Observable<IBrowserNodeResponse>;

    /**
     * Method that reads the files of a node
     * @param apiurl URL to API Service
     * @param path Path of the node from which the files should be read
     * @param allowedextensions Allowed file extensions
     */
    GetFiles(apiurl: string, path: string, allowedextensions: string): Observable<IBrowserFileResponse>;

    /**
     * Returns a node
     * @param apiurl URL to API Service
     * @param path Path of the node being requested
     * @param allowedextensions Allowed extensions that may be displayed
     */
    GetNode(apiurl: string, path: string, allowedextensions: string): Observable<IBrowserNodeResponse>;

    /**
     * Method that renames a file
     * @param apiurl URL to API Service
     * @param path Path to the file to be renamed
     * @param newFilename New filename
     * @param allowedextensions Allowed extension for files
     */
    RenameFile(
        apiurl: string,
        path: string,
        newFilename: string,
        allowedextensions: string
    ): Observable<IBrowserFileResponse>;

    /**
     * Rename a node
     * @param apiurl URL to API Service
     * @param path Path of the node to be renamed
     * @param newFoldername New name of the node
     */
    RenameNode(apiurl: string, path: string, newFoldername: string): Observable<IBrowserNodeResponse>;

    /**
     * Saves an uploaded file in the structure
     * @param apiurl URL to API Service
     * @param path Path where the new file should be saved
     * @param uploadid ID of the upload
     * @param allowedextensions Allowed extensions for the upload
     */
    SaveFile(
        apiurl: string,
        path: string,
        uploadid: string,
        allowedextensions: string
    ): Observable<IBrowserFileResponse>;

    /**
     * Saves a node
     * @param apiurl URL to API Service
     * @param path Path where the node should be saved
     * @param newFoldername Name of the new node
     */
    SaveNode(apiurl: string, path: string, newFoldername: string): Observable<IBrowserNodeResponse>;

    // #endregion Methods
}
