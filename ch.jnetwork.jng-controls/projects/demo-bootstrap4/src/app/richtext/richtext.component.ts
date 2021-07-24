import { Component, EventEmitter, NgZone, OnInit } from '@angular/core';
import { QuillService } from 'ngx-quill';
import Quill from 'quill';

@Component({
  selector: 'app-richtext',
  templateUrl: './richtext.component.html',
  styleUrls: ['./richtext.component.scss'],
})
export class DemoRichtextComponent implements OnInit {
  private quill: Quill;

  public showdialog = false;

  public settings: any;

  private imageSetter = null;

  private test: EventEmitter<string> = new EventEmitter<string>();

  constructor(public ngZone: NgZone, private quillService: QuillService) {
    this.test.subscribe((log) => {
      console.log('Emitted');
    });
  }

  ngOnInit(): void {}

  public onStartet(editor: Quill): void {
    this.quill = editor;

    const toolbar = editor.getModule('toolbar');
    toolbar.addHandler('image', this.debugMessage);
    toolbar.addHandler('video', this.debugMessage2);

    console.log(toolbar);
  }

  public config = {
    base_url: '/tinymce',
    suffix: '.min',
    plugins: 'image',
    toolbar: 'image',
    file_picker_callback: this.showImageDialog,
    angular: this,
  };

  public showImageDialog(callback, value, meta): void {
    this.settings.angular.ngZone.runOutsideAngular(() => {
      this.settings.angular.ngZone.run(() => {
        this.settings.angular.showdialog = true;
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
      this.imageSetter.callback('/icons' + this.selectedFile);
    }
    this.showdialog = false;
  }

  public setSelectedFile(file: string) {
    this.selectedFile = file;
  }

  public debugMessage(): void {
    const range = this.quill.getSelection();

    this.quill.insertEmbed(
      range.index,
      'image',
      'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png'
    );
  }

  public debugMessage2(): void {
    const range = this.quill.getSelection();
    console.log(this.quill.getText(range.index, range.length));
  }
}
