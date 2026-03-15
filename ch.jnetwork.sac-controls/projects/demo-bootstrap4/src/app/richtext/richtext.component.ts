import { JsonPipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    SACBootstrap4ButtonModule,
    SACBootstrap4FormModule,
    SACBootstrap4TinyMceModule,
    SACBootstrap4ValidationSummaryModule,
    SacFormDirective,
} from '@simpleangularcontrols/sac-bootstrap4';

@Component({
    selector: 'app-richtext',
    templateUrl: './richtext.component.html',
    styleUrls: ['./richtext.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        SACBootstrap4FormModule,
        SACBootstrap4TinyMceModule,
        SACBootstrap4ButtonModule,
        SACBootstrap4ValidationSummaryModule,
        JsonPipe,
    ],
})
export class DemoRichtextComponent {
    // #region Properties

    public config1 = {};
    public config2 = {
        plugins: 'image,code,link,media',
        toolbar: 'image media link | code',
        document_base_url: '/upload/browser/',
    };
    public config3 = {};
    public config4 = {};
    public config5 = { inline: true };
    public config6 = {
        plugins: 'save',
        toolbar: 'save',
    };
    @ViewChild('myForm') public myForm: SacFormDirective;
    public value1 = '';
    public value2 = '';
    public value3 = '<div>Hello World</div>';
    public value4 = '<div>Hello World</div>';
    public value5 = '<p>Text to Edit <strong>Inline</strong></p>';
    public value6 = '<p>Text to Edit <strong>Inline</strong></p>';

    // #endregion Properties

    // #region Public Methods

    public debugAction(): void {
        this.myForm.markAsTouched();
        alert('Action');
    }

    public save6(content: string): void {
        alert('Save: ' + content);
    }

    // #endregion Public Methods
}
