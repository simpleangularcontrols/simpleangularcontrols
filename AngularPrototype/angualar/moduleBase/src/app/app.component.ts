import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

interface KeyValue {
  label: string,
  value: string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  testname1: string = '';
  testname2: string = '';
  testname3: string = 'test';
  testname4: string = '';
  testname5: string = '';

  testrequired: boolean = true;

  @ViewChild("form") myForm: NgForm;

  changeRequired() {
    this.testrequired = !this.testrequired;
    console.info('Required is:' + this.testrequired);
  }

  onSubmit() {
    if (this.myForm.valid) {
      alert(JSON.stringify(this.myForm.value));
    } else {
      this.validateAllFields(this.myForm.form);
    }
  }

  validateAllFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFields(control);
      }
    });
  }


  // Form Example 2
  field1: string = '';
  field2: string = '';
  field3: string = 'Test';
  checkbox2: boolean = true;
  dropdown1: string = '';
  dropdown2: string = 'v3';
  dropdown3: string = 'v3';

  dropdownitems: KeyValue[] = [{ label: 'Wert 1', value: 'v1', text: 'Text 1' }, { label: 'Wert 2', value: 'v2', text: 'Text 2' }, { label: 'Wert 3', value: 'v3', text: 'Text 3' }];

  t3Save(data: NgForm) {
    alert('Save Form 2');

    alert(JSON.stringify(data.value));

  }
}
