import { Component, Input, Output, EventEmitter } from "@angular/core";
import { NgBaseModelControl } from "../../base/basemodelcontrol";
import * as moment from 'moment';
import { OnInit } from "@angular/core";



// #region Helper Classes

class DateSelectorItem {

  constructor(displaytext: string, date: Date, isenabled: boolean, isselected: boolean, iscurrent: boolean) {
    this.displaytext = displaytext;
    this.date = date;
    this.isenabled = isenabled;
    this.iscurrent = iscurrent;
    this.isselected = isselected;
  }

  displaytext: string = '';
  date: Date = undefined;
  isenabled: boolean = false;
  iscurrent: boolean = false;
  isselected: boolean = false;
}

// #endregion

@Component({
  selector: 'ngDateSelector',
  templateUrl: './dateselector.html',
})
export class NgDateSelector implements OnInit {

  @Input("month")
  _month: number = 4;

  @Input("year")
  _year: number = 2018

  private _initialDate: moment.Moment;
  @Input("initialDate")
  get initialDate(): Date {
    return this._initialDate.toDate();
  }

  @Output("onSelectDate")
  onSelectDate = new EventEmitter<any>();

  set initialDate(v: Date | null) {
    if (v === null || v === undefined) {
      this._initialDate = moment();
    } else {
      this._initialDate = moment(v);
    }

    this._month = this._initialDate.month();
    this._year = this._initialDate.year();

    this.initDates();
  }

  private beginOfCalendar: number = 1;

  dates: DateSelectorItem[] = [];

  ngOnInit() {
    // Init Initial Date if Empty
    if (this._initialDate === undefined)
      this.initialDate = null;

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
    this.dates = [];

    if (weekdayBegin !== this.beginOfCalendar) {
      var lastMonthDay = lastMonth.daysInMonth();
      var lastMonthDate = new Date(lastMonth.year(), lastMonth.month(), lastMonthDay);
      var lastMonthWeekday = moment(lastMonthDate).weekday();

      var daysInLastMonth = 7 - (((7 + this.beginOfCalendar) - lastMonthWeekday) % 7);
      if (daysInLastMonth === 7)
        daysInLastMonth = 0;

      for (var i = lastMonthDay; i >= lastMonthDay - daysInLastMonth; i--) {
        this.dates.splice(0, 0, new DateSelectorItem(i.toString(), new Date(lastMonth.year(), lastMonth.month(), i), false, false, false));
      }
    }

    // Add all Days in Month
    for (var i = 1; i <= currentMonth.daysInMonth(); i++) {

      var isSelectedDate: boolean = this._initialDate.month() === this._month && this._initialDate.year() === this._year && this._initialDate.date() === i;
      var isCurrentDate: boolean = moment().month() === this._month && moment().year() === this._year && moment().date() === i;

      this.dates.push(new DateSelectorItem(i.toString(), moment.utc([this._year, this._month, i]).toDate(), true, isSelectedDate, isCurrentDate));
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
        this.dates.push(new DateSelectorItem(i.toString(), new Date(nextMonths.year(), nextMonths.month(), i), true, false, false));
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

  selectDate(v: Date): void {
    this.onSelectDate.emit({ date: v });
  }
}
