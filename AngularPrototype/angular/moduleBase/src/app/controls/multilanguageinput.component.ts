import { Component, ViewChild } from '@angular/core';
import { NgFormular } from '@jnetwork/jngcontrols-bootstrap4';

export class MultiLangauageDataModel {


  public de: string = '';
  public en: string = '';
}


@Component({
  selector: 'ngExampleMultiLanguage',
  templateUrl: './multilanguageinput.component.html'
})
export class ExampleMultiLanguageInput {

  @ViewChild("formMultiLanguage")
  formular: NgFormular;

  public save(): void {

  }

  ValuesItem = {
    Model1: new MultiLangauageDataModel(),
    Model2: new MultiLangauageDataModel(),
    Model3: new MultiLangauageDataModel(),
    Model4: { de: 'Wert Deutsch', en: 'Wert Englisch' }
  };

}
