import { Observable } from 'rxjs';
import { IBrowserFileResponse } from '../components/browser/models/browserfileresponse';
import { IBrowserNodeResponse } from '../components/browser/models/browsernoderesponse';

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
