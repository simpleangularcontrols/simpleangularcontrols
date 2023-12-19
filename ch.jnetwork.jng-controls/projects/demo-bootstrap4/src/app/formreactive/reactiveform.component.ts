import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validation } from '@jnetwork/sac-common';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
})
export class DemoRectiveFormComponent {
  // formfield1 = new FormControl('', Validation.required('VALIDATION_ERROR_REQUIRED','VALIDATION_ERROR_SUMMARY_REQUIRED'));
  baseForm = new FormGroup({
    inputvalue: new FormControl(''),
    checkboxvalue: new FormControl(true),
    listvalue: new FormControl(''),
    dropdownvalue: new FormControl(''),
    radiobuttonvalue: new FormControl('1'),
    datetimevalue: new FormControl(''),
    partial: new FormGroup({
      inputvalue2: new FormControl(''),
    }),
  });
}
