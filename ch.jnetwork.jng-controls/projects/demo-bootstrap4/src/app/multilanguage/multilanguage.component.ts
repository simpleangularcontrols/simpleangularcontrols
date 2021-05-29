import { Component, ViewChild } from '@angular/core';
import { NgFormularDirective } from '@jnetwork/jngcontrols-bootstrap4';

export class MultiLanguageDataModel {
  public de: string = '';
  public en: string = '';
}

@Component({
  selector: 'app-multilanguage',
  templateUrl: './multilanguage.component.html',
})
export class DemoMultilanguageComponent {
  public values: any = {
    Model1: new MultiLanguageDataModel(),
    Model2: new MultiLanguageDataModel(),
    Model3: new MultiLanguageDataModel(),
    Model4: { de: 'Wert Deutsch', en: 'Wert Englisch' },
    Model5: { de: 'Wert Deutsch', en: 'Wert Englisch' },
  };

  @ViewChild('myForm') myForm: NgFormularDirective;

  public debugAction(): void {
    this.myForm.markAsTouched();
    alert('Action');
  }
}
