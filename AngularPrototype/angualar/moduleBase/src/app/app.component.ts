import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { DeprecatedCurrencyPipe } from '@angular/common/src/pipes/deprecated/number_pipe';

interface KeyValue {
  label: string,
  value: string,
  text: string
}

interface KeyValue2 extends KeyValue {
  enabled: boolean
}

interface GroupElement {
  label: string,
  items: KeyValue[]
}

class formdataDateTime {
  datum1: Date = new Date(2018, 10, 22, null, null, null, null);
  datum2: Date = new Date(2018, 8, 10, null, null, null, null);
  datum3: Date = new Date(2018, 9, 12, null, null, null, null);
  datum4: Date = new Date(2018, 2, 1, null, null, null, null);
}

class formdata {
  // Form Example 2
  field1: string = '';
  field2: string = '';
  field3: string = 'Test';
  field6: string = '';


  fieldd1: number = 1.24;
  fieldd2: number = 4.24;
  fieldd3: number = -2.24;

  fieldi1: number = 1;
  fieldi2: number = 32;
  fieldi3: number = -4;

  fieldcurrency1: number = 20.5;

  fieldemail1: string = '';
  fieldemail2: string = '';

  fieldpassword1: string = '';
  fieldpassword2: string = 'testpassword';
  fieldpassword3: string = '';

  fieldarea1: string = '';
  fieldarea2: string = '';
  fieldarea3: string = '';

  checkbox2: boolean = true;
  dropdown1: string = '';
  dropdown2: string = 'v1';
  dropdown3: string = 'v3';
  dropdown4: string = 'v3';
  dropdown5: string = 'v3';
  dropdown6: string = 'v2';
  dropdown7: string = '';
  dropdown8: string = '';
  dropdown9: string = '';
  dropdown10: string = '';
  listbox1: string[];
  listbox2: string[] = ["v2", "v3"];
  listbox3: string[];
  listbox4: string[] = ["v2", "v3"];

  dropdownitems: KeyValue[] = [{ label: 'Wert 1', value: 'v1', text: 'Text 1' }, { label: 'Wert 2', value: 'v2', text: 'Text 2' }, { label: 'Wert 3', value: 'v3', text: 'Text 3' }];
  dropdownitems2: KeyValue2[] = [{ label: 'Wert 1', value: 'v1', text: 'Text 1', enabled: true }, { label: 'Wert 2', value: 'v2', text: 'Text 2', enabled: false }, { label: 'Wert 3', value: 'v3', text: 'Text 3', enabled: true }];
  groupitems: GroupElement[] = [{
    label: 'Group 1', items: [{ label: 'Wert 1', value: 'v1', text: 'Text 1' }, { label: 'Wert 2', value: 'v2', text: 'Text 2' }]
  }, {
    label: 'Group 2', items: [{ label: 'Wert 3', value: 'v3', text: 'Text 3' }]
  }];

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

  values: formdata = new formdata();

  t3Save() {
    //alert('Save Form 2');
    alert(JSON.stringify(this.values));

  }

  valuesDateTime: formdataDateTime = new formdataDateTime();
  mindatevalue: Date = new Date(2018, 1, 1);

  dateTimeSave() {
    alert(JSON.stringify(this.valuesDateTime));
  }


  modal1: boolean = false;

  modal1Open() {
    alert(this.modal1);
    this.modal1 = true;
    alert(this.modal1);
  }
  modal1Close() {
    alert(this.modal1);
    this.modal1 = false;
    alert(this.modal1);
  }
}


