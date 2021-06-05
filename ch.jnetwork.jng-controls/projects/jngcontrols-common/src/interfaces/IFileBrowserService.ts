import { Observable } from 'rxjs';
import { IBrowserFile } from '../controls/browser/models/browserfile';
import { IBrowserNode } from '../controls/browser/models/browsernode';

export interface IFileBrowserService {
  GetNode(apiurl: string, path: string): Observable<IBrowserNode>;

  GetFiles(apiurl: string, path: string): Observable<IBrowserFile[]>;
}
