/**
 * Wrapper für DateTimeControl
 */
export interface IDateTimeControl {
  /**
   * Methode ergibt boolean, ob das Datum valid ist
   */
  IsDateValid(): boolean;
  /**
   * Methode ergibt Datum-Format vom String
   */
  GetDateTimeFormatString(): string;
  /**
   * Wert
   */
  readonly value: any;
}

