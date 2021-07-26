import { Observable } from 'rxjs';
import { IBrowserFileResponse } from '../controls/browser/models/browserfileresponse';
import { IBrowserNodeResponse } from '../controls/browser/models/browsernoderesponse';
import { IBrowserNode } from '../public_api';

export interface IFileBrowserService {
  GetFiles(apiurl: string, path: string): Observable<IBrowserFileResponse>;
  SaveFile(
    apiurl: string,
    path: string,
    uploadid: string
  ): Observable<IBrowserFileResponse>;
  RenameFile(
    apiurl: string,
    path: string,
    newFilename: string
  ): Observable<IBrowserFileResponse>;
  DeleteFile(apiurl: string, path: string): Observable<IBrowserFileResponse>;

  GetNode(apiurl: string, path: string): Observable<IBrowserNodeResponse>;
  SaveNode(
    apiurl: string,
    path: string,
    newFoldername: string
  ): Observable<IBrowserNodeResponse>;
  RenameNode(
    apiurl: string,
    path: string,
    newFoldername: string
  ): Observable<IBrowserNodeResponse>;
  DeleteNode(apiurl: string, path: string): Observable<IBrowserNodeResponse>;
}
