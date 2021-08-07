import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-richtext',
  templateUrl: './richtext.component.html',
  styleUrls: ['./richtext.component.scss'],
})
export class DemoRichtextComponent implements OnInit {
  private dialogsettings = null;

  public showdialog = false;
  public selectedfile: string | null = null;
  public allowedtypes = '';
  public settings: any;
  public selectedFile: string = null;

  constructor(protected ngZone: NgZone) {}

  ngOnInit(): void {}

  public config = {
    base_url: '/tinymce',
    branding: false,
    height: '400px',
    suffix: '.min',
    plugins: 'image,code,link,media',
    toolbar: 'image media link | code',
    document_base_url: '/upload/browser/',
    file_picker_types: 'file media image',
    file_picker_callback: this.showImageDialog,
    angular: this,

    image_description: true,
    image_class_list: [
      { title: 'None', value: '' },
      { title: 'No border', value: 'img_no_border' },
      {
        title: 'Borders',
        menu: [
          { title: 'Green border', value: 'img_green_border' },
          { title: 'Blue border', value: 'img_blue_border' },
          { title: 'Red border', value: 'img_red_border' },
        ],
      },
    ],
    image_list: [
      { title: 'My image 1', value: 'https://www.example.com/my1.gif' },
      { title: 'My image 2', value: 'http://www.moxiecode.com/my2.gif' },
    ],
  };

  public value1 = '';
  public config1 = {
    plugins: 'image,code,link,media',
    toolbar: 'image media link | code',
    document_base_url: '/upload/browser/',
  };

  public showImageDialog(callback, value: string, meta: any): void {
    this.settings.angular.ngZone.runOutsideAngular(() => {
      this.settings.angular.ngZone.run(() => {
        this.settings.angular.showdialog = true;
        this.settings.angular.selectedfile = value;
        if (meta.filetype === 'image') {
          this.settings.angular.allowedtypes = '.jpg,.gif,.png';
        } else {
          this.settings.angular.allowedtypes = null;
        }

        this.settings.angular.dialogsettings = {
          callback: callback,
          value: value,
          meta: meta,
        };
      });
    });
  }

  public setResult(): void {
    if (this.selectedFile) {
      if (
        this.selectedFile.startsWith('/') ||
        this.selectedFile.startsWith('\\')
      ) {
        this.selectedFile = this.selectedFile.substring(1);
      }

      this.dialogsettings.callback(this.selectedFile);
    }
    this.showdialog = false;
  }

  public setSelectedFile(file: string) {
    this.selectedFile = file;
  }
}
