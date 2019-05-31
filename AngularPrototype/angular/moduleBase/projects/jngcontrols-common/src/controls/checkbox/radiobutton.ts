import { Input, EventEmitter, Output, TemplateRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { NgRadiobuttonsCommon } from './radiobuttons';

export abstract class NgRadiobuttonCommon implements OnDestroy {

  constructor(protected ngRadioButtons: NgRadiobuttonsCommon) {
    // Registration des Controls in NgRadioButtons Container
    this.ngRadioButtons.RegisterRadioButton(this);
  }

  @Input("value")
  public _value: any;

  @Input("label")
  public _label: string;

  @Input("checked")
  public _checked: boolean;

  @Input("disabled")
  public _disabled: boolean;

  get isDisabled(): boolean {
    return this._disabled || this.ngRadioButtons._disabledControl;
  }

  private _hidden: boolean = false;

  @Input("hidden")
  set hidden(v: boolean | string) {
    if (v === null || v === undefined || typeof v === 'boolean')
      this._hidden = v as boolean;
    else
      this._hidden = v === 'true';

    // Model Reset falls RadioButton selektiert war
    if (this._hidden && this._checked) {
      this.ngRadioButtons.SelectItem(null);
    }
  }
  get hidden(): boolean | string {
    return this._hidden;
  }

  // Unique Index für RadioButton
  _index: number = null;
  get getIndex(): number {
    if (this._index === null && this.ngRadioButtons !== null && this.ngRadioButtons !== undefined)
      this._index = this.ngRadioButtons.GetRadionButtonIndex();

    return this._index;
  }

  // Parent Control Name
  get getName(): string {
    return this.ngRadioButtons._name;
  }

  //#region Control Templates

  // Template für Value Element
  @Input("labeltemplate")
  displayValueTemplate: TemplateRef<any>;

  //#endregion

  //#region Control Events

  ngOnDestroy(): void {
    // De-Registration des Controls in NgRadioButtons Container
    this.ngRadioButtons.UnregisterRadioButton(this);
  }

  //#endregion

  public ChangeEvent(): void {
    this.ngRadioButtons.SelectItem(this._value);
    this.onselectitem.emit();
  }

  @Output()
  onselectitem = new EventEmitter();
}
