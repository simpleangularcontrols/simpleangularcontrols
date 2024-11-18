import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';
import {
  SACBootstrap3CheckboxModule,
  SACBootstrap3DateTimeModule,
  SACBootstrap3InputModule,
  SACBootstrap3ValidationSummaryModule,
} from '@simpleangularcontrols/sac-bootstrap3';
import { Validation } from '@simpleangularcontrols/sac-common';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SACBootstrap3ValidationSummaryModule,
    SACBootstrap3InputModule,
    SACBootstrap3CheckboxModule,
    SACBootstrap3DateTimeModule,
  ],
})
export class DemoRectiveFormComponent {
  // #region Properties

  // formfield1 = new FormControl('', Validation.required('VALIDATION_ERROR_REQUIRED','VALIDATION_ERROR_SUMMARY_REQUIRED'));
  baseForm = new UntypedFormGroup({
    inputvalue: new UntypedFormControl(''),
    checkboxvalue: new UntypedFormControl(true),
    listvalue: new UntypedFormControl(''),
    dropdownvalue: new UntypedFormControl(''),
    radiobuttonvalue: new UntypedFormControl('1'),
    datetimevalue: new UntypedFormControl('2024-11-22T17:10:00+01:00'),
    partial: new UntypedFormGroup({
      part1: new UntypedFormGroup({
        inputvalue2: new UntypedFormControl(''),
        inputvalue3: new UntypedFormControl(
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
