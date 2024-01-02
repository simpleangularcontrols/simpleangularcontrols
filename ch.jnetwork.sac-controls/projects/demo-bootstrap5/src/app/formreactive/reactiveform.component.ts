import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validation } from '@simpleangularcontrols/sac-common';
import { SACBootstrap5ValidationSummaryModule, SACBootstrap5InputModule, SACBootstrap5CheckboxModule, SACBootstrap5DateTimeModule } from '@simpleangularcontrols/sac-bootstrap5';

@Component({
    selector: 'app-reactiveform',
    templateUrl: './reactiveform.component.html',
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        SACBootstrap5ValidationSummaryModule,
        SACBootstrap5InputModule,
        SACBootstrap5CheckboxModule,
        SACBootstrap5DateTimeModule,
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
