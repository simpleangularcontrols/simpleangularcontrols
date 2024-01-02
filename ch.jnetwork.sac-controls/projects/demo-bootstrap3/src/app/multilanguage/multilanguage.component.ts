import { Component, ViewChild } from '@angular/core';
import { SacFormDirective, SACBootstrap3FormModule, SACBootstrap3ButtonModule, SACBootstrap3ValidationSummaryModule } from '@simpleangularcontrols/sac-bootstrap3';
import { FormsModule } from '@angular/forms';

export class MultiLanguageDataModel {
  public de: string = '';
  public en: string = '';
}

@Component({
    selector: 'app-multilanguage',
    templateUrl: './multilanguage.component.html',
    standalone: true,
    imports: [
        FormsModule,
        SACBootstrap3FormModule,
        SACBootstrap3ButtonModule,
        SACBootstrap3ValidationSummaryModule,
    ],
})
export class DemoMultilanguageComponent {
  public values: any = {
    Model1: new MultiLanguageDataModel(),
    Model2: new MultiLanguageDataModel(),
    Model3: new MultiLanguageDataModel(),
    Model4: { de: 'Wert Deutsch', en: 'Wert Englisch' },
    Model5: { de: 'Wert Deutsch', en: 'Wert Englisch' },
  };

  @ViewChild('myForm') myForm: SacFormDirective;

  public debugAction(): void {
    this.myForm.markAsTouched();
    alert('Action');
  }
}
