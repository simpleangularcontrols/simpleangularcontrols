import { Input, EventEmitter, Output, TemplateRef, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { NgRadiobuttonsCommon } from './radiobuttons';

export abstract class NgRadiobuttonCommon implements OnDestroy {

  /**
   * Konstruktor
   * @param ngRadioButtons
   */
  constructor(protected ngRadioButtons: NgRadiobuttonsCommon) {
    // Registration des Controls in NgRadioButtons Container
    this.ngRadioButtons.RegisterRadioButton(this);
  }

  /**
   * Wert
   */
  @Input("value")
  public _value: any;

  /**
   * Label Text
   */
  @Input("label")
  public _label: string;

  /**
   * Boolean Property, ob Radiobutton checked ist
   */
  @Input("checked")
  public _checked: boolean;

  /**
   * Boolean Property, ob Radiobutton disabled ist
   */
  @Input("disabled")
  public _disabled: boolean;

  /**
   * Methode ergibt Boolean, ob Control disabled ist
   */
  get isDisabled(): boolean {
    return this._disabled || this.ngRadioButtons._disabledControl;
  }

  /**
   * Boolean Property zum Ausblenden des Controls; default Wert - false
   */
  private _hidden: boolean = false;

  /**
   * Setter für hidden Property
   */
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



  /**
   * Unique Index für RadioButton
   */
  _index: number = null;

  /**
   * Getter für Unique Index
   */
  get getIndex(): number {
    if (this._index === null && this.ngRadioButtons !== null && this.ngRadioButtons !== undefined)
      this._index = this.ngRadioButtons.GetRadionButtonIndex();

    return this._index;
  }

  /**
   * Parent Control Name
   */
  get getName(): string {
    return this.ngRadioButtons._name;
  }

  //#region Control Templates

  /**
   * Template für Value Element
   */
  @Input("labeltemplate")
  displayValueTemplate: TemplateRef<any>;

  //#endregion

  //#region Control Events

  /**
   * Event wenn die Komponente zerstört wird
   */
  ngOnDestroy(): void {
    // De-Registration des Controls in NgRadioButtons Container
    this.ngRadioButtons.UnregisterRadioButton(this);
  }

  //#endregion

  /**
   * Event bei Änderungen
   */
  public ChangeEvent(): void {
    this.ngRadioButtons.SelectItem(this._value);
    this.onselectitem.emit();
  }

  /**
   * Output Event
   */
  @Output()
  onselectitem = new EventEmitter();
}
