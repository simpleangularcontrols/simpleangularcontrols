import { Component, ViewChild } from '@angular/core';
import { SacFormDirective, SACBootstrap5FormModule, SACBootstrap5ButtonModule, SACBootstrap5ValidationSummaryModule, SACBootstrap5MultilanguageModule } from '@simpleangularcontrols/sac-bootstrap5';
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
        SACBootstrap5FormModule,
        SACBootstrap5ButtonModule,
        SACBootstrap5ValidationSummaryModule,
        SACBootstrap5MultilanguageModule,
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
