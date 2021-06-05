import { Component } from '@angular/core';
import { NgFileBrowserCommon } from '@jnetwork/jngcontrols-common';

@Component({
  selector: 'ng-filebrowser,ngFileBrowser',
  templateUrl: './browser.html',
})
export class NgBrowserComponent extends NgFileBrowserCommon {
  public count(anzahl: number): Array<void> {
    return new Array(anzahl);
  }
}
