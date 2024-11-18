import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validation } from '@simpleangularcontrols/sac-common';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
})
export class DemoRectiveFormComponent {
  // #region Properties

  // formfield1 = new FormControl('', Validation.required('VALIDATION_ERROR_REQUIRED','VALIDATION_ERROR_SUMMARY_REQUIRED'));
  public baseForm = new FormGroup({
    inputvalue: new FormControl(''),
    checkboxvalue: new FormControl(true),
    listvalue: new FormControl(''),
    dropdownvalue: new FormControl(''),
    radiobuttonvalue: new FormControl('1'),
    datetimevalue: new FormControl('2024-11-22T17:10:00+01:00'),
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

  // #endregion Properties

  // #region Public Methods

  public change(): void {
    this.baseForm.patchValue({ datetimevalue: '2024-11-23T17:11:00+01:00' });
  }

  // #endregion Public Methods
}
