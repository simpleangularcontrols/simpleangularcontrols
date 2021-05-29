/**
 * Wrapper für DateTimeControl
 */
export interface IDateTimeControl {
  /**
   * Wert
   */
  readonly value: any;

  /**
   * Methode ergibt boolean, ob das Datum valid ist
   */
  IsDateValid(): boolean;
  /**
   * Methode ergibt Datum-Format vom String
   */
  GetDateTimeFormatString(): string;
}

