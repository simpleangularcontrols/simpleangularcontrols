import { Component, ViewChild } from '@angular/core';
import { SacFormDirective } from '@jnetwork/sac-bootstrap4';

export class MultiLangauageDataModel {


  public de: string = '';
  public en: string = '';
}


@Component({
  selector: 'app-example-multilanguage',
  templateUrl: './multilanguageinput.component.html'
})
export class ExampleMultiLanguageInputComponent {

  ValuesItem = {
    Model1: new MultiLangauageDataModel(),
    Model2: new MultiLangauageDataModel(),
    Model3: new MultiLangauageDataModel(),
    Model4: { de: 'Wert Deutsch', en: 'Wert Englisch' },
    Model5: { de: 'Wert Deutsch', en: 'Wert Englisch' }
  };

  @ViewChild('formMultiLanguage', { static: true })
  formular: SacFormDirective;

  public save(): void {

    this.formular.markAsTouched();

  }


}
