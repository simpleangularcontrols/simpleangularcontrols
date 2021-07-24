import { HttpClient } from '@angular/common/http';
import { Component, Injector } from '@angular/core';
import {
  IBrowserFile,
  IBrowserNode, NgFileBrowserCommon
} from '@jnetwork/jngcontrols-common';
import { Observable } from 'rxjs';
import { ServiceConfirm } from '../confirm/confirm.service';

@Component({
  selector: 'ng-filebrowser,ngFileBrowser',
  templateUrl: './browser.html',
  providers: [ServiceConfirm],
})
export class NgBrowserComponent extends NgFileBrowserCommon {
  constructor(
    httpClient: HttpClient,
    injector: Injector,
    private confirmService: ServiceConfirm
  ) {
    super(httpClient, injector);
  }

  public count(anzahl: number): Array<void> {
    return new Array(anzahl);
  }

  confirmDeleteFile(file: IBrowserFile): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.confirmService
        .ConfirmMessage('Löschen', 'Soll die Datei gelöscht werden')
        .subscribe((result) => {
          if (result === 'yes') {
            observer.next(true);
          } else {
            observer.next(false);
          }
          observer.complete();
        });
    });
  }

  confirmDeleteNode(file: IBrowserNode): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.confirmService
        .ConfirmMessage('Löschen', 'Soll der Ordner gelöscht werden')
        .subscribe((result) => {
          if (result === 'yes') {
            observer.next(true);
          } else {
            observer.next(false);
          }
          observer.complete();
        });
    });
  }
}
