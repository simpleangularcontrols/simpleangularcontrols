import { EventEmitter, Input, OnInit, Output, Directive } from '@angular/core';
import * as moment_ from 'moment';
// Import Moment.JS
import { Moment } from 'moment';
/**
 * Moment
 */
const moment = moment_["default"];



// #region Helper Classes
/**
 *Basis Komponente für DateSelectorItem
 */
class DateSelectorItem {

  /**
   * Konstruktor
   * @param displaytext Anzeigetext
   * @param date Datum
   * @param isenabled Element ist aktiv
   * @param isselected Element ist selektiert
   * @param iscurrent Element ist aktuelles Element
   * @param isnew Element ist neu
   */
  constructor(displaytext: string, date: Date, isenabled: boolean, isselected: boolean, iscurrent: boolean, isnew: boolean) {
    this.displaytext = displaytext;
    this.date = date;
    this.isenabled = isenabled;
    this.iscurrent = iscurrent;
    this.isselected = isselected;
    this.isnew = isnew;
  }

  /**
   * DisplayText Property; default Wert - ''
   */
  displaytext: string = '';
  /**
   * Datum
   */
  date: Date = undefined;
  /**
   * Boolean Property, die zeigt, ob das Control enabled ist; default Wert - false
   */
  isenabled: boolean = false;
  /**
   * Boolean Property, die zeigt, ob das Element aktuell ist; default Wert - false
   */
  iscurrent: boolean = false;
  /**
   * Boolean Property, die zeigt, ob das Element selektiert ist; default Wert - false
   */
  isselected: boolean = false;
  /**
   * Boolean Property, die zeigt, ob das Element neu ist; default Wert - false
   */
  isnew: boolean = false;
}

// #endregion

/**
 *Basis Komponente für NgDateSelector
 */
@Directive()
export class NgDateSelectorCommon implements OnInit {

  /**
   * Anfang des Kalenders
   */
  private beginOfCalendar: number = 1;

  /**
   * Array von Daten
   */
  dates: DateSelectorItem[][] = [];

  /**
   * Datum Selector
   */
  @Input('dateselection')
  _dateselection: boolean = false;

  /**
   * Time Selector
   */
  @Input('timeselection')
  _timeselection: boolean = false;

  /**
   * Monat
   */
  @Input('month')
  _month: number = 4;

  /**
   * Jahr
   */
  @Input('year')
  _year: number = 2018;

  /**
   * Boolean Property für automatische Selektierung; default Wert - false
   */
  @Input('autoapplyselection')
  _autoapplyselection = false;

  /**
   * Aktuell gewähltes Datum
   */
  private _selectedValue: Moment | null;

  /**
   * Ursprüngliches Datum
   */
  private _initialValue: Moment | null;

  /**
   * Input für ursprüngliches Datum
   */
  @Input('initialValue')
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

  /**
   * Output Event beim Datum Selektieren
   */
  @Output('onSelect')
  onSelectDate = new EventEmitter<any>();

  /**
   * Ursprünglicher Kalender
   */
  private initCalendar(v: Moment) {

    /**
     * Monat und Jahr setzen
     */
    this._month = v.month();
    this._year = v.year();

    /**
     * Daten für Kalender initialiseren
     */
    this.initDates();
  }

  /**
   * Init Event
   */
  ngOnInit() {
    /**
     * Init Initial Date if Empty
     */
    if (this._initialValue === undefined) {
      this.initialValue = null;
    }

    this.initDates();
  }

  /**
   * Initial Datum
   */
  private initDates(): void {
    const currentMonth = moment(new Date(this._year, this._month, 1));
    const lastMonth = moment(new Date(this._year, this._month, 1));
    lastMonth.add({ months: -1 });
    const nextMonths = moment(new Date(this._year, this._month, 1));
    nextMonths.add({ months: 1 });

    const weekdayBegin: number = currentMonth.weekday();
    const weekdayEnd: number = moment(new Date(currentMonth.year(), currentMonth.month(), currentMonth.daysInMonth())).weekday();
    // Clear Array
    const daysInCalendar: DateSelectorItem[] = [];
    this.dates = [];

    if (weekdayBegin !== this.beginOfCalendar) {
      const lastMonthDay = lastMonth.daysInMonth();
      const lastMonthDate = new Date(lastMonth.year(), lastMonth.month(), lastMonthDay);
      const lastMonthWeekday = moment(lastMonthDate).weekday();

      let daysInLastMonth = 7 - (((7 + this.beginOfCalendar) - lastMonthWeekday) % 7);
      if (daysInLastMonth === 7) {
        daysInLastMonth = 0;
      }

      for (let day = lastMonthDay; day >= lastMonthDay - daysInLastMonth; day--) {
        daysInCalendar.splice(0, 0, new DateSelectorItem(day.toString(), new Date(lastMonth.year(), lastMonth.month(), day), false, false, false, false));
      }
    }

    // Add all Days in Month
    for (let dayinmonth = 1; dayinmonth <= currentMonth.daysInMonth(); dayinmonth++) {

      let isSelectedDate: boolean = false;
      let isNewDate: boolean = false;
      const isCurrentDate: boolean = moment().month() === this._month && moment().year() === this._year && moment().date() === dayinmonth;

      // Initial Wert setzen, falls vorhanden
      if (this._initialValue !== null) {
        isSelectedDate = this._initialValue.month() === this._month && this._initialValue.year() === this._year && this._initialValue.date() === dayinmonth;
      }

      // Selected Date Wert setzen, falls Wert gesetzt
      if (this._selectedValue !== null) {
        isNewDate = this._selectedValue.month() === this._month && this._selectedValue.year() === this._year && this._selectedValue.date() === dayinmonth;
      }

      daysInCalendar.push(new DateSelectorItem(dayinmonth.toString(), moment([this._year, this._month, dayinmonth]).toDate(), true, isSelectedDate, isCurrentDate, isNewDate));
    }

    let endOfCalender: number;
    if (this.beginOfCalendar === 0) {
      endOfCalender = 6;
    } else {
      endOfCalender = 0;
    }

    if (weekdayEnd !== endOfCalender) {

      let countMissingDays: number;

      if (this.beginOfCalendar === 0) {
        countMissingDays = endOfCalender - weekdayEnd;
      } else {
        countMissingDays = 7 - weekdayEnd;
      }

      for (let i = 1; i <= countMissingDays; i++) {
        daysInCalendar.push(new DateSelectorItem(i.toString(), new Date(nextMonths.year(), nextMonths.month(), i), false, false, false, false));
      }

    }

    for (let index = 0; index < daysInCalendar.length / 7; index++) {
      for (let day = 0; day < 7; day++) {
        if (day === 0) {
          this.dates[index] = [];
        }

        this.dates[index].push(daysInCalendar[(index * 7) + day]);
      }
    }
  }

  /**
   * Modus ändern
   */
  changeMode(): void {
    if (this.beginOfCalendar === 0) {
      this.beginOfCalendar = 1;
    } else {
      this.beginOfCalendar = 0;
    }

    this.initDates();
  }

  /**
   * Vorheriger Monat
   */
  monthBack(): void {
    this._month = this._month - 1;

    if (this._month < 0) {
      this._month = 11;
      this._year = this._year - 1;
    }

    this.initDates();
  }

  /**
   * Nächster Monat
   */
  monthNext(): void {
    this._month = this._month + 1;

    if (this._month > 11) {
      this._month = 0;
      this._year = this._year + 1;
    }

    this.initDates();
  }

  /**
   * Methode ergibt das selektierte Datum
   */
  selectDate(v: DateSelectorItem): void {
    if (v.isenabled) {
      this.dates.forEach(date => date.filter(filter => filter.isnew).forEach(itm => itm.isnew = false));
      this.dates.forEach(date => date.filter(filter => filter.isselected).forEach(itm => itm.isselected = false));
      v.isnew = true;
      v.isselected = true;

      const dateValue: Moment = moment(v.date);

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

      if (this._autoapplyselection) {
        this.applySelection();
      }
    }
  }

  //#region Time Settings

  /**
   * Getter für Stunden Uhrzeit
   */
  getHours(): number {
    if (this._selectedValue === null) {

      /**
       * Wert aus Init Value lesen
       */
      if (this._initialValue === null) {
        return 0;
      } else {
        return this._initialValue.hour();
      }

    } else {
      return this._selectedValue.hour();
    }
  }
  /**
   * Setter für Stunden Uhrzeit
   */
  setHours(v: number | null): void {
    /**
     * Select Value setzen falls leer
     */
    this.initSelectedValue();

    if (v === null) {
      this._selectedValue.hour(0);
    } else {
      this._selectedValue.hour(v);
    }
  }
  /**
   * Getter für Minuten Uhrzeit
   */
  getMinutes(): number {
    if (this._selectedValue === null) {

      /**
       * Wert aus Init Value lesen
       */
      if (this._initialValue === null) {
        return 0;
      } else {
        return this._initialValue.minutes();
      }

    } else {
      return this._selectedValue.minutes();
    }
  }
  /**
   * Setter für Minuten Uhrzeit
   */
  setMinutes(v: number | null): void {
    /**
     * Select Value setzen falls leer
     */
    this.initSelectedValue();

    if (v === null) {
      this._selectedValue.minutes(0);
    } else {
      this._selectedValue.minutes(v);
    }
  }

  private initSelectedValue() {
    /**
     * Select Value setzen falls leer
     */
    if (this._selectedValue === null) {
      if (this._initialValue === null) {
        this._selectedValue = moment();
      } else {
        this._selectedValue = this._initialValue;
      }
    }
  }

  //#endregion

  //#region Button Actions

  /**
   * Auswahl auf aktuelle Zeit stellen
   */
  setToday(): void {
    this._selectedValue = moment();

    /**
     * Sekunden un Milisekunden Clean
     */
    this._selectedValue.second(0);
    this._selectedValue.millisecond(0);

    /**
     * Kalender Daten initialisieren falls Kalender angezeigt
     */
    if (this._dateselection) {
      this.initCalendar(this._selectedValue);
    }

    if (this._autoapplyselection) {
      this.applySelection();
    }
  }

  /**
   * Selektierung übernehmen
   */
  applySelection(): void {

    if (this._timeselection === false && this._selectedValue !== null) {
      this._selectedValue.hour(0);
      this._selectedValue.minute(0);
      this._selectedValue.second(0);
      this._selectedValue.millisecond(0);
    }

    if (this._dateselection === false && this._selectedValue !== null) {
      const tempValue: Moment = this._selectedValue.local();
      tempValue.date(1);
      tempValue.month(0);
      tempValue.year(1900);
      this._selectedValue = tempValue.utc();
    }

    this.onSelectDate.emit({
      date: this._selectedValue
    });
  }

  /**
   * Selektierung resetten
   */
  resetSelection(): void {
    this.onSelectDate.emit({
      date: null
    });
  }

  //#endregion
}
