import { HttpClient } from '@angular/common/http';
import { Component, Injector, ViewChild } from '@angular/core';
import {
  IBrowserFile,
  IBrowserNode,
  NgFileBrowserCommon,
} from '@jnetwork/jngcontrols-common';
import { NgDropzoneMultipleComponent } from '../../controls/upload/dropzonemultiple';
import { forkJoin, Observable } from 'rxjs';
import { ServiceConfirm } from '../../controls/confirm/confirm.service';

@Component({
  selector: 'ng-filebrowser,ngFileBrowser',
  templateUrl: './browser.html',
  providers: [ServiceConfirm],
})
export class NgBrowserComponent extends NgFileBrowserCommon {
  @ViewChild(NgDropzoneMultipleComponent, { static: false })
  private uploadComponent: NgDropzoneMultipleComponent;

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
      forkJoin({
        title: this.lngResourceService.GetString('FILEBROWSER_DELETE'),
        message: this.lngResourceService.GetString('FILEBROWSER_CONFIRM_DELETEFILE'),
      }).subscribe((text) => {
        this.confirmService
          .ConfirmMessage(text.title, text.message)
          .subscribe((result) => {
            if (result === 'yes') {
              observer.next(true);
            } else {
              observer.next(false);
            }
            observer.complete();
          });
      });
    });
  }

  confirmDeleteNode(file: IBrowserNode): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      forkJoin({
        title: this.lngResourceService.GetString('FILEBROWSER_DELETE'),
        message: this.lngResourceService.GetString('FILEBROWSER_CONFIRM_DELETEFOLDER'),
      }).subscribe((text) => {
        this.confirmService
          .ConfirmMessage(text.title, text.message)
          .subscribe((result) => {
            if (result === 'yes') {
              observer.next(true);
            } else {
              observer.next(false);
            }
            observer.complete();
          });
      });
    });
  }

  uploadedFileMoved(uploadid: string): void {
    const item = this.uploadComponent.uploads.find(
      (itm) => itm.documentid === uploadid
    );

    if (item) {
      this.uploadComponent.cancel(item.uploadId);
    }
  }
}
