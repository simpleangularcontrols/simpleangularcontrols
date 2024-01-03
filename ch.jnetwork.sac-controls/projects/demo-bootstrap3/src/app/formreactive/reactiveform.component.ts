import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validation } from '@simpleangularcontrols/sac-common';
import { SACBootstrap3ValidationSummaryModule, SACBootstrap3InputModule, SACBootstrap3CheckboxModule, SACBootstrap3DateTimeModule } from '@simpleangularcontrols/sac-bootstrap3';

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
  // formfield1 = new FormControl('', Validation.required('VALIDATION_ERROR_REQUIRED','VALIDATION_ERROR_SUMMARY_REQUIRED'));
  baseForm = new UntypedFormGroup({
    inputvalue: new UntypedFormControl(''),
    checkboxvalue: new UntypedFormControl(true),
    listvalue: new UntypedFormControl(''),
    dropdownvalue: new UntypedFormControl(''),
    radiobuttonvalue: new UntypedFormControl('1'),
    datetimevalue: new UntypedFormControl(''),
    partial: new UntypedFormGroup({
      part1: new UntypedFormGroup({
        inputvalue2: new UntypedFormControl(''),
      }),
    }),
  });
}
