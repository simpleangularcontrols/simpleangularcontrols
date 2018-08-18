interface IDateTimeControl {
  IsDateValid(): boolean;
  _mindate: Date;
  _maxdate: Date;
  readonly DATEFORMAT: string;
  readonly value: any;
}
