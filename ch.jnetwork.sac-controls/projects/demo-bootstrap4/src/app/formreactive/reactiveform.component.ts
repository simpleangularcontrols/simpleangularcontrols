import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validation } from '@simpleangularcontrols/sac-common';

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
      part1: new FormGroup({
        inputvalue2: new FormControl(''),
        inputvalue3: new FormControl(
          '',
          Validation.required(
            'Custom Error Message',
            'Custom Error Message (Summary)'
          )
        ),
      }),
    }),
  });
}
