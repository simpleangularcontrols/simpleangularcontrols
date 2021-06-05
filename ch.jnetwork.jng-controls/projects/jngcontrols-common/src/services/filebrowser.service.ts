import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { IFileBrowserService } from '../interfaces/IFileBrowserService';
import { IBrowserNode } from '../controls/browser/models/browsernode';
import { BrowserNodeRequest } from '../controls/browser/models/browsernoderequest';
import { IBrowserFile } from '../controls/browser/models/browserfile';

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
  abstract GetNode(apiurl: string, path: string): Observable<IBrowserNode>;
  abstract GetFiles(apiurl: string, path: string): Observable<IBrowserFile[]>;
}

@Injectable({
  providedIn: 'root',
})
export class InternalFileBrowserService extends FileBrowserService {
  constructor(private httpclient: HttpClient) {
    super();
  }

  public GetNode(apiurl: string, path: string): Observable<IBrowserNode> {
    const url = `${apiurl}/node`;

    if (!path) {
      path = '';
    }

    const request = new BrowserNodeRequest({
      Path: path,
    });

    return this.httpclient.post<IBrowserNode>(url, request, {
      withCredentials: true,
    });
  }

  public GetFiles(apiurl: string, path: string): Observable<IBrowserFile[]> {
    const url = `${apiurl}/files`;

    if (!path) {
      path = '';
    }

    const request = new BrowserNodeRequest({
      Path: path,
    });

    return this.httpclient.post<IBrowserFile[]>(url, request, {
      withCredentials: true,
    });
  }
}
