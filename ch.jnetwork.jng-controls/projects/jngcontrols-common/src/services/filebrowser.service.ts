import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { IBrowserFile } from '../controls/browser/models/browserfile';
import { BrowserFileDeleteRequest } from '../controls/browser/models/browserfiledeleterequest';
import { BrowserFileRenameRequest } from '../controls/browser/models/browserfilerenamerequest';
import { IBrowserFileResponse } from '../controls/browser/models/browserfileresponse';
import { BrowserFileSaveRequest } from '../controls/browser/models/browserfilesaverequest';
import { IBrowserNode } from '../controls/browser/models/browsernode';
import { BrowserNodeDeleteRequest } from '../controls/browser/models/browsernodedeleterequest';
import { BrowserNodeNewRequest } from '../controls/browser/models/browsernodenewrequest';
import { BrowserNodeRenameRequest } from '../controls/browser/models/browsernoderenamerequest';
import { BrowserNodeRequest } from '../controls/browser/models/browsernoderequest';
import { IBrowserNodeResponse } from '../controls/browser/models/browsernoderesponse';
import { IFileBrowserService } from '../interfaces/IFileBrowserService';

/**
 * Injection Token für Language Service
 */
export const FILEBROWSER_SERVICE = new InjectionToken<IFileBrowserService>(
  'FileBrowserService'
);

@Injectable({
  providedIn: 'root',
})
export abstract class FileBrowserService implements IFileBrowserService {
  abstract GetNode(
    apiurl: string,
    path: string
  ): Observable<IBrowserNodeResponse>;
  abstract SaveNode(
    apiurl: string,
    path: string,
    newFoldername: string
  ): Observable<IBrowserNodeResponse>;
  abstract RenameNode(
    apiurl: string,
    path: string,
    newFoldername: string
  ): Observable<IBrowserNodeResponse>;
  abstract DeleteNode(
    apiurl: string,
    path: string
  ): Observable<IBrowserNodeResponse>;

  abstract GetFiles(
    apiurl: string,
    path: string
  ): Observable<IBrowserFileResponse>;
  abstract SaveFile(
    apiurl: string,
    path: string,
    id: string
  ): Observable<IBrowserFileResponse>;
  abstract RenameFile(
    apiurl: string,
    path: string,
    newFilename: string
  ): Observable<IBrowserFileResponse>;
  abstract DeleteFile(
    apiurl: string,
    path: string
  ): Observable<IBrowserFileResponse>;
}

@Injectable({
  providedIn: 'root',
})
export class InternalFileBrowserService extends FileBrowserService {
  constructor(private httpclient: HttpClient) {
    super();
  }

  public GetNode(
    apiurl: string,
    path: string
  ): Observable<IBrowserNodeResponse> {
    const url = `${apiurl}/getnodes`;

    if (!path) {
      path = '';
    }

    const request = new BrowserNodeRequest({
      Path: path,
    });

    return this.httpclient.post<IBrowserNodeResponse>(url, request, {
      withCredentials: true,
    });
  }

  public SaveNode(
    apiurl: string,
    path: string,
    newFoldername: string
  ): Observable<IBrowserNodeResponse> {
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

  public RenameNode(
    apiurl: string,
    path: string,
    newFoldername: string
  ): Observable<IBrowserNodeResponse> {
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

  public DeleteNode(
    apiurl: string,
    path: string
  ): Observable<IBrowserNodeResponse> {
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

  public GetFiles(
    apiurl: string,
    path: string
  ): Observable<IBrowserFileResponse> {
    const url = `${apiurl}/getfiles`;

    if (!path) {
      path = '';
    }

    const request = new BrowserNodeRequest({
      Path: path,
    });

    return this.httpclient.post<IBrowserFileResponse>(url, request, {
      withCredentials: true,
    });
  }

  public SaveFile(
    apiurl: string,
    path: string,
    id: string
  ): Observable<IBrowserFileResponse> {
    const url = `${apiurl}/uploadfile`;

    if (!path) {
      path = '';
    }

    const request = new BrowserFileSaveRequest({
      Path: path,
      UploadId: id,
    });

    return this.httpclient.post<IBrowserFileResponse>(url, request, {
      withCredentials: true,
    });
  }

  public DeleteFile(
    apiurl: string,
    path: string
  ): Observable<IBrowserFileResponse> {
    const url = `${apiurl}/deletefile`;

    if (!path) {
      path = '';
    }

    const request = new BrowserFileDeleteRequest({
      Path: path,
    });

    return this.httpclient.post<IBrowserFileResponse>(url, request, {
      withCredentials: true,
    });
  }

  public RenameFile(
    apiurl: string,
    path: string,
    newFilename: string
  ): Observable<IBrowserFileResponse> {
    const url = `${apiurl}/renamefile`;

    if (!path) {
      path = '';
    }

    const request = new BrowserFileRenameRequest({
      Path: path,
      NewFilename: newFilename,
    });

    return this.httpclient.put<IBrowserFileResponse>(url, request, {
      withCredentials: true,
    });
  }
}
