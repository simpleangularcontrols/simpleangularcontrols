import { HttpClient } from '@angular/common/http';
import { Component, Injector, ViewChild } from '@angular/core';
import {
  IBrowserFile,
  IBrowserNode,
  NgFileBrowserCommon,
} from '@jnetwork/jngcontrols-common';
import { forkJoin, Observable } from 'rxjs';
import { ServiceConfirm } from '../../controls/confirm/confirm.service';
import { NgDropzoneMultipleComponent } from '../../controls/upload/dropzonemultiple';

/**
 * Server File Browser Komponente
 */
@Component({
  selector: 'ng-filebrowser,ngFileBrowser',
  templateUrl: './browser.html',
  providers: [ServiceConfirm],
})
export class NgBrowserComponent extends NgFileBrowserCommon {
  /**
   * Referenz auf Upload Component
   */
  @ViewChild(NgDropzoneMultipleComponent, { static: false })
  private uploadComponent: NgDropzoneMultipleComponent;

  /**
   * Konstruktor
   * @param httpClient HTTP Client
   * @param injector Angular Dependency Injection Service
   * @param confirmService Confirm Service
   */
  constructor(
    httpClient: HttpClient,
    injector: Injector,
    private confirmService: ServiceConfirm
  ) {
    super(httpClient, injector);
  }

  /**
   * Erzeugt ein Array von einer bestimmten grösse
   * @param anzahl Grösse des Array
   * @returns Array
   */
  public count(anzahl: number): Array<void> {
    return new Array(anzahl);
  }

  /**
   * Confirm Action wenn ein File gelöscht werden soll
   * @param file File das gelöscht werden soll.
   * @returns Observable ob File gelöscht werden kann.
   */
  confirmDeleteFile(file: IBrowserFile): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      forkJoin({
        title: this.lngResourceService.GetString('FILEBROWSER_DELETE'),
        message: this.lngResourceService.GetString(
          'FILEBROWSER_CONFIRM_DELETEFILE'
        ),
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

  /**
   * Confirm Action wenn ein Ordner gelöscht werden soll
   * @param node Ordner der gelöscht werden soll
   * @returns Observable ob Ordner gelöscht kann.
   */
  confirmDeleteNode(node: IBrowserNode): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      forkJoin({
        title: this.lngResourceService.GetString('FILEBROWSER_DELETE'),
        message: this.lngResourceService.GetString(
          'FILEBROWSER_CONFIRM_DELETEFOLDER'
        ),
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

  /**
   * Methode wird aufgerufen, wenn eine Datei verschoben wird
   * @param uploadid Upload ID
   */
  uploadedFileMoved(uploadid: string): void {
    const item = this.uploadComponent.uploads.find(
      (itm) => itm.documentid === uploadid
    );

    if (item) {
      this.uploadComponent.cancel(item.uploadId);
    }
  }
}
