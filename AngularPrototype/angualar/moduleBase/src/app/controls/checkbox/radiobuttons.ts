import { Component, Input, Host, OnInit, AfterContentInit, QueryList, ContentChildren, IterableDiffers, KeyValueDiffers, IterableDiffer, KeyValueChanges, IterableChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ControlContainer, FormControl } from '@angular/forms';
import { NgBaseListControl } from '../../base/baselistcontrol';
import { NgFormular } from '../form/form';
import { NgRadiobutton } from './radiobutton';
import { AfterViewInit, OnChanges, DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';
import { KeyValueDiffer } from '@angular/core/src/change_detection/differs/keyvalue_differs';

class RadiobuttonItem {
  public Name: string;
  public Value: string;
  public Label: string;
  public Checked: boolean;
}

@Component({
  selector: 'ngRadiobuttons',
  templateUrl: './radiobuttons.html',
  // Value Access Provider registrieren, damit Wert via Model geschrieben und gelesen werden kann
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NgRadiobuttons
    }
  ],
  // View Provider, damit das Formular an das Control gebunden werden kann
  viewProviders: [{ provide: ControlContainer, useExisting: NgFormular }]
})
export class NgRadiobuttons extends NgBaseListControl implements AfterViewInit, DoCheck {

  private iterableDiffer: IterableDiffer<any[]>;
  private keyvalueDiffer: Map<any, KeyValueDiffer<any, any>> = new Map<any, any>();

  @Input("optionchecked") _fieldChecked: string = 'checked';

  // Konstruktor
  // Inject des Formulars
  constructor( @Host() parent: NgFormular, private _iterableDiffers: IterableDiffers, private _objectDiffers: KeyValueDiffers) {
    super(parent);
  }

  ngAfterViewInit(): void {

    this.createStaticOptions();

    console.log('Create iterable diff');
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);

    if (this.options) {
      this.options.forEach(itm => {
        console.log('Create keyvalue diff');
        this.keyvalueDiffer.set(itm, this._objectDiffers.find(itm).create());
      });
    }

  }

  ngDoCheck() {
    if (this.iterableDiffer) {
      console.log('Check list changes');
      let listChanges: IterableChanges<any[]> = this.iterableDiffer.diff(this.options);
      if (listChanges) {
        listChanges.forEachAddedItem(itm => {
          console.log('List changed: new item');
          this.AddItem(itm.item);
        });

        listChanges.forEachRemovedItem(itm => {
          console.log('List changed: remove item');
          this.RemoveItem(itm.item);
        });
      }
    }

    if (this.options) {
      this.options.forEach(itm => {
        let differ: KeyValueDiffer<any, any> = this.keyvalueDiffer.get(itm);
        if (differ) {
          let objectChanges: KeyValueChanges<any, any> = differ.diff(itm);
          if (objectChanges) {
            objectChanges.forEachChangedItem(value => {
              this.UpdateItem(itm[this._fieldValue], value.key, value.currentValue);
              console.log(value.key + ' - ' + value.previousValue + ' - ' + value.currentValue + ' - ');
            });
            if (objectChanges.forEachChangedItem.length > 0) {
              console.log('Object changes detected!');
            }
          }
        }
      });
    }

  }

  @ContentChildren(NgRadiobutton)
  contentRadiobuttons: QueryList<NgRadiobutton>;

  _item: Array<RadiobuttonItem> = new Array<RadiobuttonItem>();

  writeValue(value: string) {
    super.writeValue(value);
    if (value) {
      this._item.forEach(itm => {
        if (itm.Value === value)
          itm.Checked = true;
        else
          itm.Checked = false;
      });
    }
  }

  private createStaticOptions(): void {
    console.log('Create initial items from markup');
    this.contentRadiobuttons.toArray().forEach(item => {
      var rbItem: RadiobuttonItem = new RadiobuttonItem();

      rbItem.Name = this._name;
      rbItem.Value = item._value;
      rbItem.Label = item._label;
      rbItem.Checked = item._checked;

      this._item.push(rbItem);
    });

    //console.log('Create initial items from options list');
    //if (this.options !== undefined) {
    //  this.options.forEach(itm => {
    //    this.AddItem(itm);
    //  });
    //}

  }

  public AddItem(item: any) {
    var rbItem: RadiobuttonItem = new RadiobuttonItem();

    rbItem.Name = this._name;
    rbItem.Value = item[this._fieldValue];
    rbItem.Label = item[this._fieldLabel];
    rbItem.Checked = rbItem.Value === this.value;

    this._item.push(rbItem);
  }

  public RemoveItem(item: any) {
    let rbItem = this._item.find(itm => itm.Value === item[this._fieldValue]);

    if (rbItem) {
      this._item.splice(this._item.indexOf(rbItem), 1);
    }
  }

  public SelectItem(item: string) {
    console.log("Item selected");
    // this.writeValue(item);
    this._value = item;
    this.propagateChange(item);
  }

  private UpdateItem(key: string, property: string, value: any) {

    this._item.forEach(itm => {
      if (itm.Value === key) {
        switch (property) {
          case this._fieldLabel:
            itm.Label = value;
            break;
          case this._fieldChecked:
            itm.Checked = value;
            break;
          case this._fieldEnabled:
            break;
        }
      }
    });
  }
}
