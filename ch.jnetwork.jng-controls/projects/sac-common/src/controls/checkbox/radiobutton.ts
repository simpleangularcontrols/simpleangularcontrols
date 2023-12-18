import {
  Directive,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  TemplateRef,
} from '@angular/core';
import { NgRadiobuttonsCommon } from './radiobuttons';

/**
 * Basis Komponente für NgRadiobutton.
 */
@Directive()
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
  @Input()
  public value: any;

  /**
   * Label Text
   */
  @Input()
  public label: string;

  /**
   * Boolean Property, ob Radiobutton checked ist
   */
  @Input()
  public checked: boolean;

  /**
   * Boolean Property, ob Radiobutton disabled ist
   */
  @Input()
  public disabled: boolean;

  /**
   * Output Event
   */
  @Output()
  onselectitem = new EventEmitter();

  /**
   * Methode ergibt Boolean, ob Control disabled ist
   */
  get isDisabled(): boolean {
    return this.disabled || this.ngRadioButtons.disabled;
  }

  /**
   * Boolean Property zum Ausblenden des Controls; default Wert - false
   */
  private _hidden: boolean = false;

  /**
   * Setter für hidden Property
   */
  @Input()
  set hidden(v: boolean | string) {
    if (v === null || v === undefined || typeof v === 'boolean') {
      this._hidden = v as boolean;
    } else {
      this._hidden = v === 'true';
    }

    // Model Reset falls RadioButton selektiert war
    if (this._hidden && this.checked) {
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
    if (
      this._index === null &&
      this.ngRadioButtons !== null &&
      this.ngRadioButtons !== undefined
    ) {
      this._index = this.ngRadioButtons.GetRadionButtonIndex();
    }

    return this._index;
  }

  /**
   * Parent Control Name
   */
  get getName(): string {
    return this.ngRadioButtons.name;
  }

  //#region Control Templates

  /**
   * Template für Value Element
   */
  @Input()
  labeltemplate: TemplateRef<any>;

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
    if (!this.disabled) {
      this.ngRadioButtons.SelectItem(this.value);
      this.onselectitem.emit();
    }
  }
}
