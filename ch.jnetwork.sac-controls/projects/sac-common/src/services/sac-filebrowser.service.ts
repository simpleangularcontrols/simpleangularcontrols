import { BrowserFileDeleteRequest } from '../components/browser/models/browserfiledeleterequest';
import { BrowserFileRenameRequest } from '../components/browser/models/browserfilerenamerequest';
import { IBrowserFileResponse } from '../components/browser/models/browserfileresponse';
import { BrowserFileSaveRequest } from '../components/browser/models/browserfilesaverequest';
import { BrowserNodeDeleteRequest } from '../components/browser/models/browsernodedeleterequest';
import { BrowserNodeNewRequest } from '../components/browser/models/browsernodenewrequest';
import { BrowserNodeRenameRequest } from '../components/browser/models/browsernoderenamerequest';
import { BrowserNodeRequest } from '../components/browser/models/browsernoderequest';
import { IBrowserNodeResponse } from '../components/browser/models/browsernoderesponse';
import { ISacFileBrowserService } from '../interfaces/ISacFileBrowserService';
import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

// #region Variables

/**
 * Injection Token for Language Service
 */
export const SACFILEBROWSER_SERVICE = new InjectionToken<ISacFileBrowserService>('FileBrowserService');

// #endregion Variables

// #region Exported Classes

/**
 * Abstract implementation of the file service for the browser component
 */
@Injectable({
    providedIn: 'root',
})
export abstract class SacAbstractFileBrowserService implements ISacFileBrowserService {
    // #region Public Methods

    /**
     * Deletes a file
     * @param apiurl URL to API Service
     * @param path Path of the file to be deleted
     * @param allowedextensions Allowed extensions for files
     */
    public abstract DeleteFile(
        apiurl: string,
        path: string,
        allowedextensions: string
    ): Observable<IBrowserFileResponse>;

    /**
     * Deletes a node
     * @param apiurl URL to API Service
     * @param path Path of the node to be deleted
     */
    public abstract DeleteNode(apiurl: string, path: string): Observable<IBrowserNodeResponse>;

    /**
     * Method that reads the files of a node
     * @param apiurl URL to API Service
     * @param path Path of the node from which the files should be read
     * @param allowedextensions Allowed file extensions
     */
    public abstract GetFiles(apiurl: string, path: string, allowedextensions: string): Observable<IBrowserFileResponse>;

    /**
     * Returns a node
     * @param apiurl URL to API Service
     * @param path Path of the node being requested
     * @param allowedextensions Allowed extensions that may be displayed
     */
    public abstract GetNode(apiurl: string, path: string, allowedextensions: string): Observable<IBrowserNodeResponse>;

    /**
     * Method that renames a file
     * @param apiurl URL to API Service
     * @param path Path to the file to be renamed
     * @param newFilename New filename
     * @param allowedextensions Allowed extension for files
     */
    public abstract RenameFile(
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
    public abstract RenameNode(apiurl: string, path: string, newFoldername: string): Observable<IBrowserNodeResponse>;

    /**
     * Saves an uploaded file in the structure
     * @param apiurl URL to API Service
     * @param path Path where the new file should be saved
     * @param id ID of the upload
     * @param allowedextensions Allowed extensions for the upload
     */
    public abstract SaveFile(
        apiurl: string,
        path: string,
        id: string,
        allowedextensions: string
    ): Observable<IBrowserFileResponse>;

    /**
     * Saves a node
     * @param apiurl URL to API Service
     * @param path Path where the node should be saved
     * @param newFoldername Name of the new node
     */
    public abstract SaveNode(apiurl: string, path: string, newFoldername: string): Observable<IBrowserNodeResponse>;

    // #endregion Public Methods
}

/**
 * Standard implementation of the backend service for the file browser component
 */
@Injectable({
    providedIn: 'root',
})
export class SacDefaultFileBrowserService extends SacAbstractFileBrowserService {
    // #region Constructors

    /**
     * Constructor
     * @param httpclient HTTP Client Service
     */
    constructor(private httpclient: HttpClient) {
        super();
    }

    // #endregion Constructors

    // #region Public Methods

    /**
     * Deletes a file
     * @param apiurl URL to API Service
     * @param path Path of the file to be deleted
     * @param allowedextensions Allowed extensions for files
     * @returns Observable containing the file response after deletion
     */
    public DeleteFile(apiurl: string, path: string, allowedextensions: string): Observable<IBrowserFileResponse> {
        const url = `${apiurl}/deletefile`;

        if (!path) {
            path = '';
        }

        const request = new BrowserFileDeleteRequest({
            Path: path,
            AllowedTypes: allowedextensions,
        });

        return this.httpclient.post<IBrowserFileResponse>(url, request, {
            withCredentials: true,
        });
    }

    /**
     * Deletes a node
     * @param apiurl URL to API Service
     * @param path Path of the node to be deleted
     * @returns Observable containing the node response after deletion
     */
    public DeleteNode(apiurl: string, path: string): Observable<IBrowserNodeResponse> {
        const url = `${apiurl}/deletenode`;

        if (!path) {
            path = '';
        }

        const request = new BrowserNodeDeleteRequest({
            Path: path,
        });

        return this.httpclient.post<IBrowserNodeResponse>(url, request, {
            withCredentials: true,
        });
    }

    /**
     * Method that reads the files of a node
     * @param apiurl URL to API Service
     * @param path Path of the node from which the files should be read
     * @param allowedextensions Allowed file extensions
     * @returns Observable containing the file response
     */
    public GetFiles(apiurl: string, path: string, allowedextensions: string): Observable<IBrowserFileResponse> {
        const url = `${apiurl}/getfiles`;

        if (!path) {
            path = '';
        }

        const request = new BrowserNodeRequest({
            Path: path,
            AllowedTypes: allowedextensions,
        });

        return this.httpclient.post<IBrowserFileResponse>(url, request, {
            withCredentials: true,
        });
    }

    /**
     * Returns a node
     * @param apiurl URL to API Service
     * @param path Path of the node being requested
     * @param allowedextensions Allowed extensions that may be displayed
     * @returns Observable containing the node response
     */
    public GetNode(apiurl: string, path: string, allowedextensions: string): Observable<IBrowserNodeResponse> {
        const url = `${apiurl}/getnodes`;

        if (!path) {
            path = '';
        }

        const request = new BrowserNodeRequest({
            Path: path,
            AllowedTypes: allowedextensions,
        });

        return this.httpclient.post<IBrowserNodeResponse>(url, request, {
            withCredentials: true,
        });
    }

    /**
     * Method that renames a file
     * @param apiurl URL to API Service
     * @param path Path to the file to be renamed
     * @param newFilename New filename
     * @param allowedextensions Allowed extension for files
     * @returns Observable containing the file response after rename
     */
    public RenameFile(
        apiurl: string,
        path: string,
        newFilename: string,
        allowedextensions: string
    ): Observable<IBrowserFileResponse> {
        const url = `${apiurl}/renamefile`;

        if (!path) {
            path = '';
        }

        const request = new BrowserFileRenameRequest({
            Path: path,
            NewFilename: newFilename,
            AllowedTypes: allowedextensions,
        });

        return this.httpclient.put<IBrowserFileResponse>(url, request, {
            withCredentials: true,
        });
    }

    /**
     * Rename a node
     * @param apiurl URL to API Service
     * @param path Path of the node to be renamed
     * @param newFoldername New name of the node
     * @returns Observable containing the node response after rename
     */
    public RenameNode(apiurl: string, path: string, newFoldername: string): Observable<IBrowserNodeResponse> {
        const url = `${apiurl}/renamenode`;

        if (!path) {
            path = '';
        }

        const request = new BrowserNodeRenameRequest({
            Path: path,
            NewFoldername: newFoldername,
        });

        return this.httpclient.put<IBrowserNodeResponse>(url, request, {
            withCredentials: true,
        });
    }

    /**
     * Saves an uploaded file in the structure
     * @param apiurl URL to API Service
     * @param path Path where the new file should be saved
     * @param id ID of the upload
     * @param allowedextensions Allowed extensions for the upload
     * @returns Observable containing the file response after save
     */
    public SaveFile(
        apiurl: string,
        path: string,
        id: string,
        allowedextensions: string
    ): Observable<IBrowserFileResponse> {
        const url = `${apiurl}/uploadfile`;

        if (!path) {
            path = '';
        }

        const request = new BrowserFileSaveRequest({
            Path: path,
            UploadId: id,
            AllowedTypes: allowedextensions,
        });

        return this.httpclient.post<IBrowserFileResponse>(url, request, {
            withCredentials: true,
        });
    }

    /**
     * Saves a node
     * @param apiurl URL to API Service
     * @param path Path where the node should be saved
     * @param newFoldername Name of the new node
     * @returns Observable containing the node response after save
     */
    public SaveNode(apiurl: string, path: string, newFoldername: string): Observable<IBrowserNodeResponse> {
        const url = `${apiurl}/newnode`;

        if (!path) {
            path = '';
        }

        const request = new BrowserNodeNewRequest({
            Path: path,
            NewFoldername: newFoldername,
        });

        return this.httpclient.post<IBrowserNodeResponse>(url, request, {
            withCredentials: true,
        });
    }

    // #endregion Public Methods
}

// #endregion Exported Classes
