import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-richtext',
  templateUrl: './richtext.component.html',
  styleUrls: ['./richtext.component.scss'],
})
export class DemoRichtextComponent {
  public value1 = '';
  public config1 = {};

  public value2 = '';
  public config2 = {
    plugins: 'image,code,link,media',
    toolbar: 'image media link | code',
    document_base_url: '/upload/browser/',
  };

  public value3 = '<div>Hello World</div>';
  public config3 = {};

  public value4 = '<div>Hello World</div>';
  public config4 = {};

  public value5 = '<p>Text to Edit <strong>Inline</strong></p>';
  public config5 = { inline: true };

  public value6 = '<p>Text to Edit <strong>Inline</strong></p>';
  public config6 = {
    plugins: 'save',
    toolbar: 'save',
  };
  public save6(content: string): void {
    alert('Save: ' + content);
  }
}
