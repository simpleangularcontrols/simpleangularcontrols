import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

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

  t3Save() {
    alert('Save Form 2');
  }
}
