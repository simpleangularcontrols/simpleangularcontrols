import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { DeprecatedCurrencyPipe } from '@angular/common/src/pipes/deprecated/number_pipe';
import { NgFormular } from './controls/form/form';

interface KeyValue {
  label: string,
  value: string,
  text: string
}

interface KeyValue2 extends KeyValue {
  enabled: boolean
}

interface KeyValue3 extends KeyValue2 {
  checked: boolean
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
  datum5: Date = new Date(2018, 2, 1, null, null, null, null);
  
  time1: Date = new Date(1900, 0, 1, 14, 51, null, null);
  time2: Date = new Date(1900, 0, 1, 18, 5, null, null);
  time3: Date = new Date(1900, 0, 1, 8, 32, null, null);
  time4: Date = new Date(1900, 0, 1, 14, 35, null, null);
  time5: Date = new Date(1900, 0, 1, 10, 15, null, null);
}

class formdata {
  // Form Example 2
  field1: string = '';
  field2: string = '';
  field3: string = 'Test';
  field4: string = '';
  field5: string = '';
  field6: string = '';
  field7: string = '';


  fieldd1: number = 1.24;
  fieldd2: number = 4.24;
  fieldd3: number = -2.24;
  fieldd4: number = 4.24;

  fieldi1: number = 1;
  fieldi2: number = 32;
  fieldi3: number = -4;
  fieldi4: number = 0;

  fieldcurrency1: number = 20.5;
  fieldcurrency2: number = 0;

  fieldemail1: string = '';
  fieldemail2: string = '';
  fieldemail3: string = '';

  fieldpassword1: string = '';
  fieldpassword2: string = 'testpassword';
  fieldpassword3: string = '';
  fieldpassword4: string = '';

  fieldarea1: string = '';
  fieldarea2: string = '';
  fieldarea3: string = '';
  fieldarea4: string = '';

  checkbox1: boolean;
  checkbox2: boolean = true;
  checkbox3: boolean;
  checkbox4: boolean;

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
  dropdown11: string = '';

  radiobuttons1: string = '3';
  radiobuttons2: string = 'o1';
  radiobuttons3: string = '';
  radiobuttons4: string = '3';

  listbox1: string[];
  listbox2: string[] = ["v2", "v3"];
  listbox3: string[];
  listbox4: string[] = ["v2", "v3"];
  listbox5: string[] = [];

  dropdownitems: KeyValue[] = [{ label: 'Wert 1', value: 'v1', text: 'Text 1' }, { label: 'Wert 2', value: 'v2', text: 'Text 2' }, { label: 'Wert 3', value: 'v3', text: 'Text 3' }];
  dropdownitems2: KeyValue2[] = [{ label: 'Wert 1', value: 'v1', text: 'Text 1', enabled: true }, { label: 'Wert 2', value: 'v2', text: 'Text 2', enabled: false }, { label: 'Wert 3', value: 'v3', text: 'Text 3', enabled: true }];
  groupitems: GroupElement[] = [{
    label: 'Group 1', items: [{ label: 'Wert 1', value: 'v1', text: 'Text 1' }, { label: 'Wert 2', value: 'v2', text: 'Text 2' }]
  }, {
    label: 'Group 2', items: [{ label: 'Wert 3', value: 'v3', text: 'Text 3' }]
  }];

  radiobuttonitems1: KeyValue3[] = [
    { label: 'Option 1', value: 'o1', text: 'Text 1', checked: false, enabled: true },
    { label: 'Option 2', value: 'o2', text: 'Text 2', checked: true, enabled: true },
    { label: 'Option 3', value: 'o3', text: 'Text 3', checked: false, enabled: true },
    { label: 'Option 4', value: 'o4', text: 'Text 4', checked: false, enabled: true }
  ];

  radiobuttonitems2: KeyValue3[] = [
    { label: 'Option 1', value: 'o1', text: 'Text 1', checked: false, enabled: true },
    { label: 'Option 2', value: 'o2', text: 'Text 2', checked: true, enabled: true },
    { label: 'Option 3', value: 'o3', text: 'Text 3', checked: false, enabled: false },
    { label: 'Option 4', value: 'o4', text: 'Text 4', checked: false, enabled: true }
  ];
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

  @ViewChild("form") myForm: NgFormular;
  @ViewChild("form2") form2: NgFormular;
  @ViewChild("formTemp") formTemp: NgFormular;
  @ViewChild("formDateTime") formDateTime: NgFormular;

  changeRequired() {
    this.testrequired = !this.testrequired;
    console.info('Required is:' + this.testrequired);
  }

  onSubmit() {
    if (this.myForm.form.valid) {
      alert(JSON.stringify(this.myForm.form.value));
    } else {
      this.validateAllFields(this.myForm.form.form);
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

  GetFormValues(): string {
    return JSON.stringify(this.values) + '---' + JSON.stringify(this.valuesDateTime);
  }

  valuesDateTime: formdataDateTime = new formdataDateTime();
  mindatevalue: Date = new Date(2018, 1, 1);

  dateTimeSave() {
    alert(JSON.stringify(this.valuesDateTime));
  }

  radio1Add(): void {
    this.values.radiobuttonitems1.push(
      { label: 'Option 5', value: 'o5', text: 'Text 5', checked: false, enabled: true }
    );
  }

  radio1Remove(): void {
    var option = this.values.radiobuttonitems1.find(itm => itm.value === 'o5');
    if (option !== undefined)
      this.values.radiobuttonitems1.splice(this.values.radiobuttonitems1.indexOf(option), 1);
  }

  radio1ChangeProperty(): void {
    var option = this.values.radiobuttonitems1.find(itm => itm.value === 'o4');
    if (option !== undefined)
      option.label = "Property Change " + Date.now();
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


