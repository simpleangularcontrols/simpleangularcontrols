import { Component, EventEmitter, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-richtext',
  templateUrl: './richtext.component.html',
  styleUrls: ['./richtext.component.scss'],
})
export class DemoRichtextComponent implements OnInit {
  public showdialog = false;
  public selectedfile = null;

  public settings: any;

  private imageSetter = null;

  private test: EventEmitter<string> = new EventEmitter<string>();

  constructor(public ngZone: NgZone) {
    this.test.subscribe((log) => {
      console.log('Emitted');
    });
  }

  ngOnInit(): void {}

  public config = {
    base_url: '/tinymce',
    suffix: '.min',
    plugins: 'image',
    toolbar: 'image',
    file_picker_callback: this.showImageDialog,
    angular: this,
  };

  public showImageDialog(callback, value: string, meta): void {
    this.settings.angular.ngZone.runOutsideAngular(() => {
      this.settings.angular.ngZone.run(() => {
        this.settings.angular.showdialog = true;
        this.settings.angular.selectedfile = value.replace(
          'upload/browser',
          ''
        );
        this.settings.angular.imageSetter = {
          callback: callback,
          value: value,
          meta: meta,
        };
      });
    });
  }

  public selectedFile: string = null;

  public setImage(): void {
    if (this.selectedFile) {
      this.imageSetter.callback('upload/browser' + this.selectedFile);
    }
    this.showdialog = false;
  }

  public setSelectedFile(file: string) {
    this.selectedFile = file;
  }
}
