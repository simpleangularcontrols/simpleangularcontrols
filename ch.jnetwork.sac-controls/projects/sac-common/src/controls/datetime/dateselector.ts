import {
  EventEmitter,
  Input,
  OnInit,
  Output,
  Directive,
  Injector,
} from '@angular/core';
import * as moment_ from 'moment';
// Import Moment.JS
import { Moment } from 'moment';
import { SACICON_SERVICE, SacDefaultIconService } from '../../services';
import { ISacIconService } from '../../interfaces/ISacIconService';

// #region Classes

/**
 *Basis Komponente für DateSelectorItem
 */
class DateSelectorItem {
  // #region Properties

  /**
   * Datum
   */
  public date: Date = undefined;
  /**
   * DisplayText Property; default Wert - ''
   */
  public displaytext: string = '';
  /**
   * Boolean Property, die zeigt, ob das Element aktuell ist; default Wert - false
   */
  public iscurrent: boolean = false;
  /**
   * Boolean Property, die zeigt, ob das Control enabled ist; default Wert - false
   */
  public isenabled: boolean = false;
  /**
   * Boolean Property, die zeigt, ob das Element neu ist; default Wert - false
   */
  public isnew: boolean = false;
  /**
   * Boolean Property, die zeigt, ob das Element selektiert ist; default Wert - false
   */
  public isselected: boolean = false;

  // #endregion Properties

  // #region Constructors

  /**
   * Konstruktor
   * @param displaytext Anzeigetext
   * @param date Datum
   * @param isenabled Element ist aktiv
   * @param isselected Element ist selektiert
   * @param iscurrent Element ist aktuelles Element
   * @param isnew Element ist neu
   */
  constructor(
    displaytext: string,
    date: Date,
    isenabled: boolean,
    isselected: boolean,
    iscurrent: boolean,
    isnew: boolean
  ) {
    this.displaytext = displaytext;
    this.date = date;
    this.isenabled = isenabled;
    this.iscurrent = iscurrent;
    this.isselected = isselected;
    this.isnew = isnew;
  }

  // #endregion Constructors
}

/**
 *Basis Komponente für SacDateSelector
 */
@Directive()
export class SacDateSelectorCommon implements OnInit {
  // #region Properties

  /**
   * Ursprüngliches Datum
   */
  private _initialValue: Moment | null;
  /**
   * Aktuell gewähltes Datum
   */
  private _selectedValue: Moment | null;
  /**
   * Anfang des Kalenders
   */
  private beginOfCalendar: number = 1;
  /**
   * icon service to resolve icons
   */
  private iconService: ISacIconService;

  /**
   * Boolean Property für automatische Selektierung; default Wert - false
   */
  @Input()
  public autoapplyselection = false;
  /**
   * Array von Daten
   */
  public dates: DateSelectorItem[][] = [];
  /**
   * Datum Selector
   */
  @Input()
  public dateselection: boolean = false;
  /**
   * Monat
   */
  @Input()
  public month: number = 4;
  /**
   * Output Event beim Datum Selektieren
   */
  @Output()
  public selectdate = new EventEmitter<any>();
  /**
   * Time Selector
   */
  @Input()
  public timeselection: boolean = false;
  /**
   * Jahr
   */
  @Input()
  public year: number = 2018;

  // #endregion Properties

  // #region Constructors

  constructor(injector: Injector) {
    this.iconService = injector.get(
      SACICON_SERVICE,
      new SacDefaultIconService()
    );
  }

  // #endregion Constructors

  // #region Public Getters And Setters

  /**
   * Get icon to switch to next month
   */
  public get iconMonthNext(): string {
    return this.iconService.DateTimeSelectorComponentMonthNextIcon;
  }

  /**
   * Get icon to switch to previous month
   */
  public get iconMonthPrev(): string {
    return this.iconService.DateTimeSelectorComponentMonthPrevIcon;
  }

  /**
   * Input für ursprüngliches Datum
   */
  @Input()
  public get initialvalue(): Date {
    return this._initialValue.toDate();
  }

  public set initialvalue(v: Date | null) {
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

  // #endregion Public Getters And Setters

  // #region Public Methods

  /**
   * Selektierung übernehmen
   */
  public applySelection(): void {
    if (this.timeselection === false && this._selectedValue !== null) {
      this._selectedValue.hour(0);
      this._selectedValue.minute(0);
      this._selectedValue.second(0);
      this._selectedValue.millisecond(0);
    }

    if (this.dateselection === false && this._selectedValue !== null) {
      const tempValue: Moment = this._selectedValue.local();
      tempValue.date(1);
      tempValue.month(0);
      tempValue.year(1900);
      this._selectedValue = tempValue.utc();
    }

    this.selectdate.emit({
      date: this._selectedValue,
    });
  }

  /**
   * Modus ändern
   */
  public changeMode(): void {
    if (this.beginOfCalendar === 0) {
      this.beginOfCalendar = 1;
    } else {
      this.beginOfCalendar = 0;
    }

    this.initDates();
  }

  /**
   * Getter für Stunden Uhrzeit
   */
  public getHours(): number {
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
   * Getter für Minuten Uhrzeit
   */
  public getMinutes(): number {
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
   * Vorheriger Monat
   */
  public monthBack(): void {
    this.month = this.month - 1;

    if (this.month < 0) {
      this.month = 11;
      this.year = this.year - 1;
    }

    this.initDates();
  }

  /**
   * Nächster Monat
   */
  public monthNext(): void {
    this.month = this.month + 1;

    if (this.month > 11) {
      this.month = 0;
      this.year = this.year + 1;
    }

    this.initDates();
  }

  /**
   * Init Event
   */
  public ngOnInit() {
    /**
     * Init Initial Date if Empty
     */
    if (this._initialValue === undefined) {
      this.initialvalue = null;
    }

    this.initDates();
  }

  /**
   * Selektierung resetten
   */
  public resetSelection(): void {
    this.selectdate.emit({
      date: null,
    });
  }

  /**
   * Methode ergibt das selektierte Datum
   */
  public selectDate(v: DateSelectorItem): void {
    if (v.isenabled) {
      this.dates.forEach((date) =>
        date
          .filter((filter) => filter.isnew)
          .forEach((itm) => (itm.isnew = false))
      );
      this.dates.forEach((date) =>
        date
          .filter((filter) => filter.isselected)
          .forEach((itm) => (itm.isselected = false))
      );
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

      if (this.autoapplyselection) {
        this.applySelection();
      }
    }
  }

  /**
   * Setter für Stunden Uhrzeit
   */
  public setHours(v: number | null): void {
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
   * Setter für Minuten Uhrzeit
   */
  public setMinutes(v: number | null): void {
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

  /**
   * Auswahl auf aktuelle Zeit stellen
   */
  public setToday(): void {
    this._selectedValue = moment();

    /**
     * Sekunden un Milisekunden Clean
     */
    this._selectedValue.second(0);
    this._selectedValue.millisecond(0);

    /**
     * Kalender Daten initialisieren falls Kalender angezeigt
     */
    if (this.dateselection) {
      this.initCalendar(this._selectedValue);
    }

    if (this.autoapplyselection) {
      this.applySelection();
    }
  }

  // #endregion Public Methods

  // #region Private Methods

  /**
   * Ursprünglicher Kalender
   */
  private initCalendar(v: Moment) {
    /**
     * Monat und Jahr setzen
     */
    this.month = v.month();
    this.year = v.year();

    /**
     * Daten für Kalender initialiseren
     */
    this.initDates();
  }

  /**
   * Initial Datum
   */
  private initDates(): void {
    const currentMonth = moment(new Date(this.year, this.month, 1));
    const lastMonth = moment(new Date(this.year, this.month, 1));
    lastMonth.add({ months: -1 });
    const nextMonths = moment(new Date(this.year, this.month, 1));
    nextMonths.add({ months: 1 });

    const weekdayBegin: number = currentMonth.weekday();
    const weekdayEnd: number = moment(
      new Date(
        currentMonth.year(),
        currentMonth.month(),
        currentMonth.daysInMonth()
      )
    ).weekday();
    // Clear Array
    const daysInCalendar: DateSelectorItem[] = [];
    this.dates = [];

    if (weekdayBegin !== this.beginOfCalendar) {
      const lastMonthDay = lastMonth.daysInMonth();
      const lastMonthDate = new Date(
        lastMonth.year(),
        lastMonth.month(),
        lastMonthDay
      );
      const lastMonthWeekday = moment(lastMonthDate).weekday();

      let daysInLastMonth =
        7 - ((7 + this.beginOfCalendar - lastMonthWeekday) % 7);
      if (daysInLastMonth === 7) {
        daysInLastMonth = 0;
      }

      for (
        let day = lastMonthDay;
        day >= lastMonthDay - daysInLastMonth;
        day--
      ) {
        daysInCalendar.splice(
          0,
          0,
          new DateSelectorItem(
            day.toString(),
            new Date(lastMonth.year(), lastMonth.month(), day),
            false,
            false,
            false,
            false
          )
        );
      }
    }

    // Add all Days in Month
    for (
      let dayinmonth = 1;
      dayinmonth <= currentMonth.daysInMonth();
      dayinmonth++
    ) {
      let isSelectedDate: boolean = false;
      let isNewDate: boolean = false;
      const isCurrentDate: boolean =
        moment().month() === this.month &&
        moment().year() === this.year &&
        moment().date() === dayinmonth;

      // Initial Wert setzen, falls vorhanden
      if (this._initialValue !== null) {
        isSelectedDate =
          this._initialValue.month() === this.month &&
          this._initialValue.year() === this.year &&
          this._initialValue.date() === dayinmonth;
      }

      // Selected Date Wert setzen, falls Wert gesetzt
      if (this._selectedValue !== null) {
        isNewDate =
          this._selectedValue.month() === this.month &&
          this._selectedValue.year() === this.year &&
          this._selectedValue.date() === dayinmonth;
      }

      daysInCalendar.push(
        new DateSelectorItem(
          dayinmonth.toString(),
          moment([this.year, this.month, dayinmonth]).toDate(),
          true,
          isSelectedDate,
          isCurrentDate,
          isNewDate
        )
      );
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
        daysInCalendar.push(
          new DateSelectorItem(
            i.toString(),
            new Date(nextMonths.year(), nextMonths.month(), i),
            false,
            false,
            false,
            false
          )
        );
      }
    }

    for (let index = 0; index < daysInCalendar.length / 7; index++) {
      for (let day = 0; day < 7; day++) {
        if (day === 0) {
          this.dates[index] = [];
        }

        this.dates[index].push(daysInCalendar[index * 7 + day]);
      }
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

  // #endregion Private Methods
}

// #endregion Classes

// #region Variables

/**
 * Moment
 */
const moment = moment_['default'];

// #endregion Variables
