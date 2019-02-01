import { Input, Output, EventEmitter } from "@angular/core";
import { OnInit } from "@angular/core";
// Import Moment.JS
import { Moment } from 'moment';
import * as moment_ from 'moment';
const moment = moment_;



// #region Helper Classes

class DateSelectorItem {

  constructor(displaytext: string, date: Date, isenabled: boolean, isselected: boolean, iscurrent: boolean, isnew: boolean) {
    this.displaytext = displaytext;
    this.date = date;
    this.isenabled = isenabled;
    this.iscurrent = iscurrent;
    this.isselected = isselected;
    this.isnew = isnew;
  }

  displaytext: string = '';
  date: Date = undefined;
  isenabled: boolean = false;
  iscurrent: boolean = false;
  isselected: boolean = false;
  isnew: boolean = false;
}

// #endregion

// @Component({
//   selector: 'ngDateSelector',
//   templateUrl: './dateselector.html',
// })
export class NgDateSelectorCommon implements OnInit {

  @Input("dateselection")
  _dateselection: boolean = false;

  @Input("timeselection")
  _timeselection: boolean = false;

  @Input("month")
  _month: number = 4;

  @Input("year")
  _year: number = 2018

  @Input("autoapplyselection")
  _autoapplyselection = false;

  // Aktuell gewähltes Datum
  private _selectedValue: Moment | null;

  private _initialValue: Moment | null;
  @Input("initialValue")
  get initialValue(): Date {
    return this._initialValue.toDate();
  }
  set initialValue(v: Date | null) {
    if (v === null || v === undefined) {
      this._initialValue = null;
    } else {
      this._initialValue = moment(v);
    }

    this._selectedValue = null;

    if (this._initialValue === null) {
      this.initCalendar(moment());
    } else {
      this.initCalendar(this._initialValue);
    }
  }

  @Output("onSelect")
  onSelectDate = new EventEmitter<any>();

  private initCalendar(v: Moment) {

    // Monat und Jahr setzen
    this._month = v.month();
    this._year = v.year();

    // Daten für Kalender initialiseren
    this.initDates();
  }

  private beginOfCalendar: number = 1;

  dates: DateSelectorItem[][] = [];

  ngOnInit() {
    // Init Initial Date if Empty
    if (this._initialValue === undefined)
      this.initialValue = null;

    this.initDates();
  }

  private initDates(): void {
    var currentMonth = moment(new Date(this._year, this._month, 1));
    var lastMonth = moment(new Date(this._year, this._month, 1));
    lastMonth.add({ months: -1 });
    var nextMonths = moment(new Date(this._year, this._month, 1));
    nextMonths.add({ months: 1 });

    var weekdayBegin: number = currentMonth.weekday();
    var weekdayEnd: number = moment(new Date(currentMonth.year(), currentMonth.month(), currentMonth.daysInMonth())).weekday();
    // Clear Array
    var daysInCalendar: DateSelectorItem[] = [];
    this.dates = [];

    if (weekdayBegin !== this.beginOfCalendar) {
      var lastMonthDay = lastMonth.daysInMonth();
      var lastMonthDate = new Date(lastMonth.year(), lastMonth.month(), lastMonthDay);
      var lastMonthWeekday = moment(lastMonthDate).weekday();

      var daysInLastMonth = 7 - (((7 + this.beginOfCalendar) - lastMonthWeekday) % 7);
      if (daysInLastMonth === 7)
        daysInLastMonth = 0;

      for (var i = lastMonthDay; i >= lastMonthDay - daysInLastMonth; i--) {
        daysInCalendar.splice(0, 0, new DateSelectorItem(i.toString(), new Date(lastMonth.year(), lastMonth.month(), i), false, false, false, false));
      }
    }

    // Add all Days in Month
    for (var i = 1; i <= currentMonth.daysInMonth(); i++) {

      var isSelectedDate: boolean = false;
      var isNewDate: boolean = false;
      var isCurrentDate: boolean = moment().month() === this._month && moment().year() === this._year && moment().date() === i;

      // Initial Wert setzen, falls vorhanden
      if (this._initialValue !== null)
        isSelectedDate = this._initialValue.month() === this._month && this._initialValue.year() === this._year && this._initialValue.date() === i;

      // Selected Date Wert setzen, falls Wert gesetzt
      if (this._selectedValue !== null)
        isNewDate = this._selectedValue.month() === this._month && this._selectedValue.year() === this._year && this._selectedValue.date() === i;

      daysInCalendar.push(new DateSelectorItem(i.toString(), moment([this._year, this._month, i]).toDate(), true, isSelectedDate, isCurrentDate, isNewDate));
    }

    var endOfCalender: number;
    if (this.beginOfCalendar === 0)
      endOfCalender = 6;
    else
      endOfCalender = 0;

    if (weekdayEnd !== endOfCalender) {

      var countMissingDays: number;

      if (this.beginOfCalendar === 0)
        countMissingDays = endOfCalender - weekdayEnd;
      else
        countMissingDays = 7 - weekdayEnd;

      for (var i = 1; i <= countMissingDays; i++) {
        daysInCalendar.push(new DateSelectorItem(i.toString(), new Date(nextMonths.year(), nextMonths.month(), i), false, false, false, false));
      }

    }

    for (let index = 0; index < daysInCalendar.length / 7; index++) {
      for (let day = 0; day < 7; day++) {
        if (day === 0)
          this.dates[index]=[];

        this.dates[index].push(daysInCalendar[(index*7)+day]);
      }
    }
  }

  changeMode(): void {
    if (this.beginOfCalendar === 0)
      this.beginOfCalendar = 1;
    else
      this.beginOfCalendar = 0;

    this.initDates();
  }

  monthBack(): void {
    this._month = this._month - 1;

    if (this._month < 0) {
      this._month = 11;
      this._year = this._year - 1;
    }

    this.initDates();
  }

  monthNext(): void {
    this._month = this._month + 1;

    if (this._month > 11) {
      this._month = 0;
      this._year = this._year + 1;
    }

    this.initDates();
  }

  selectDate(v: DateSelectorItem): void {
    if (v.isenabled) {
      this.dates.forEach(itm => itm.filter(itm => itm.isnew).forEach(itm => itm.isnew = false));
      this.dates.forEach(itm => itm.filter(itm => itm.isselected).forEach(itm => itm.isselected = false));
      v.isnew = true;
      v.isselected = true;

      let dateValue: Moment = moment(v.date);

      // Übernehmen der Zeit aus dem bestehenden Wert
      if (this._selectedValue === null) {
        if (this._initialValue !== null) {
          dateValue.hour(this._initialValue.hour());
          dateValue.minute(this._initialValue.minute());
        }
      } else {
        dateValue.hour(this._selectedValue.hour());
        dateValue.minute(this._selectedValue.minute());
      }

      // Sekunden un Milisekunden Clean
      dateValue.second(0);
      dateValue.millisecond(0);
      this._selectedValue = dateValue;
      if (this._autoapplyselection)
        this.applySelection();
    }
  }

  //#region Time Settings

  getHours(): number {
    if (this._selectedValue === null) {

      // Wert aus Init Value lesen
      if (this._initialValue === null) {
        return 0;
      } else {
        return this._initialValue.hour();
      }

    } else {
      return this._selectedValue.hour();
    }
  }
  setHours(v: number | null): void {
    // Select Value setzen falls leer
    this.initSelectedValue();

    if (v === null) {
      this._selectedValue.hour(0);
    } else {
      this._selectedValue.hour(v);
    }
  }

  getMinutes(): number {
    if (this._selectedValue === null) {

      // Wert aus Init Value lesen
      if (this._initialValue === null) {
        return 0;
      } else {
        return this._initialValue.minutes();
      }

    } else {
      return this._selectedValue.minutes();
    }
  }
  setMinutes(v: number | null): void {
    // Select Value setzen falls leer
    this.initSelectedValue();

    if (v === null) {
      this._selectedValue.minutes(0);
    } else {
      this._selectedValue.minutes(v);
    }
  }

  private initSelectedValue() {
    // Select Value setzen falls leer
    if (this._selectedValue === null) {
      if (this._initialValue === null)
        this._selectedValue = moment();
      else
        this._selectedValue = this._initialValue;
    }
  }

  //#endregion

  //#region Button Actions

  // Auswahl auf aktuelle Zeit stellen
  setToday(): void {
    this._selectedValue = moment();

    // Sekunden un Milisekunden Clean
    this._selectedValue.second(0);
    this._selectedValue.millisecond(0);

    // Kalender Daten initialisieren falls Kalender angezeigt
    if (this._dateselection)
      this.initCalendar(this._selectedValue);

    if (this._autoapplyselection)
      this.applySelection()  
  }

  applySelection(): void {

    if (this._timeselection === false && this._selectedValue !== null) {
      this._selectedValue.hour(0);
      this._selectedValue.minute(0);
      this._selectedValue.second(0);
      this._selectedValue.millisecond(0);
    }

    if (this._dateselection === false && this._selectedValue !== null) {
      let tempValue: Moment = this._selectedValue.local();
      tempValue.date(1);
      tempValue.month(0);
      tempValue.year(1900);
      this._selectedValue = tempValue.utc();
    }

    this.onSelectDate.emit({
      date: this._selectedValue
    });
  }

  resetSelection(): void {
    this.onSelectDate.emit({
      date: null
    });
  }

  //#endregion
}
