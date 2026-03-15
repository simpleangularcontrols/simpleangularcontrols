import { ISacIconService } from '../../interfaces/ISacIconService';
import { SACICON_SERVICE, SacDefaultIconService } from '../../services';
import { createGuid } from '../../utilities/guid';
import { Directive, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import moment, { Moment } from 'moment';

// #region Classes

/**
 * Base component for DateSelectorItem
 */
class DateSelectorItem {
    // #region Properties

    /**
     * Date
     */
    public date: Date = undefined;

    /**
     * DisplayText property; default value - ''
     */
    public displaytext = '';

    /**
     * Boolean property indicating if the element is current; default value - false
     */
    public iscurrent = false;

    /**
     * Boolean property indicating if the control is enabled; default value - false
     */
    public isenabled = false;

    /**
     * Boolean property indicating if the element is new; default value - false
     */
    public isnew = false;

    /**
     * Boolean property indicating if the element is selected; default value - false
     */
    public isselected = false;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param displaytext Display text
     * @param date Date
     * @param isenabled Element is active
     * @param isselected Element is selected
     * @param iscurrent Element is current
     * @param isnew Element is new
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

// #endregion Classes

// #region Exported Classes

/**
 * Base component for SacDateSelector
 */
@Directive()
export class SacDateSelectorCommon implements OnInit {
    // #region Properties

    /**
     * Initial date
     */
    private _initialValue: Moment | null;

    /**
     * Currently selected date
     */
    private _selectedValue: Moment | null;

    /**
     * Beginning of the calendar
     */
    private beginOfCalendar = 1;

    /**
     * icon service to resolve icons
     */
    private iconService: ISacIconService;

    /**
     * Boolean property for automatic selection; default value - false
     */
    @Input()
    public autoapplyselection = false;

    /**
     * Array of dates
     */
    public dates: DateSelectorItem[][] = [];

    /**
     * Date selector
     */
    @Input()
    public dateselection = false;

    /**
     * Identifier used for the E2E data attribute.
     */
    @Input()
    public e2eidentifier: string | null = null;

    /**
     * Month
     */
    @Input()
    public month = 4;

    /**
     * name of control
     */
    @Input()
    public name: string = createGuid();

    /**
     * Output event when date is selected
     */
    @Output()
    public selectdate = new EventEmitter<any>();

    /**
     * Time selector
     */
    @Input()
    public timeselection = false;

    /**
     * Year
     */
    @Input()
    public year = 2018;

    // #endregion Properties

    // #region Constructors

    /**
     * Constructor
     * @param injector Service injector for dependency resolution
     */
    constructor(injector: Injector) {
        this.iconService = injector.get(SACICON_SERVICE, new SacDefaultIconService());
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
     * Input for initial date
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
     * Apply selection
     */
    public applySelection(): void {
        if (this.timeselection === false && this._selectedValue !== null) {
            this._selectedValue.hour(0);
            this._selectedValue.minute(0);
            this._selectedValue.second(0);
            this._selectedValue.millisecond(0);
        }

        if (this.dateselection === false && this._selectedValue !== null) {
            const tempValue: moment.Moment = this._selectedValue.local();
            tempValue.date(1);
            tempValue.month(0);
            tempValue.year(1900);
            this._selectedValue = tempValue.utc();
        }

        if (this._selectedValue === null && this._initialValue !== null) {
            this.selectdate.emit({ date: this._initialValue.local() });
            return;
        }

        this.selectdate.emit({
            date: this._selectedValue,
        });
    }

    /**
     * Change mode
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
     * Getter for hour of time
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
     * Getter for minute of time
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
     * Previous month
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
     * Next month
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
     * Init event
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
     * Reset selection
     */
    public resetSelection(): void {
        this.selectdate.emit({
            date: null,
        });
    }

    /**
     * Method returns the selected date
     */
    public selectDate(v: DateSelectorItem): void {
        if (v.isenabled) {
            this.dates.forEach((date) => date.filter((filter) => filter.isnew).forEach((itm) => (itm.isnew = false)));
            this.dates.forEach((date) =>
                date.filter((filter) => filter.isselected).forEach((itm) => (itm.isselected = false))
            );
            v.isnew = true;
            v.isselected = true;

            const dateValue: Moment = moment(v.date);

            // Transfer the time from the existing value
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
     * Setter for hour of time
     */
    public setHours(v: number | null): void {
        if (v >= 24) {
            return;
        }
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
     * Setter for minute of time
     */
    public setMinutes(v: number | null): void {
        if (v >= 60) {
            return;
        }

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
     * Set selection to current time
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
     * Initial calendar
     */
    private initCalendar(v: Moment) {
        /**
         * Set month and year
         */
        this.month = v.month();
        this.year = v.year();

        /**
         * Initialize data for calendar
         */
        this.initDates();
    }

    /**
     * Initial date
     */
    private initDates(): void {
        const currentMonth = moment(new Date(this.year, this.month, 1));
        const lastMonth = moment(new Date(this.year, this.month, 1));
        lastMonth.add({ months: -1 });
        const nextMonths = moment(new Date(this.year, this.month, 1));
        nextMonths.add({ months: 1 });

        const weekdayBegin: number = currentMonth.weekday();
        const weekdayEnd: number = moment(
            new Date(currentMonth.year(), currentMonth.month(), currentMonth.daysInMonth())
        ).weekday();
        // Clear Array
        const daysInCalendar: DateSelectorItem[] = [];
        this.dates = [];

        if (weekdayBegin !== this.beginOfCalendar) {
            const lastMonthDay = lastMonth.daysInMonth();
            const lastMonthDate = new Date(lastMonth.year(), lastMonth.month(), lastMonthDay);
            const lastMonthWeekday = moment(lastMonthDate).weekday();

            let daysInLastMonth = 7 - ((7 + this.beginOfCalendar - lastMonthWeekday) % 7);
            if (daysInLastMonth === 7) {
                daysInLastMonth = 0;
            }

            for (let day = lastMonthDay; day >= lastMonthDay - daysInLastMonth; day--) {
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

        // Add all days in month
        for (let dayinmonth = 1; dayinmonth <= currentMonth.daysInMonth(); dayinmonth++) {
            let isSelectedDate = false;
            let isNewDate = false;
            const isCurrentDate: boolean =
                moment().month() === this.month && moment().year() === this.year && moment().date() === dayinmonth;

            // Set initial value if present
            if (this._initialValue !== null) {
                isSelectedDate =
                    this._initialValue.month() === this.month &&
                    this._initialValue.year() === this.year &&
                    this._initialValue.date() === dayinmonth;
            }

            // Set selected date value if set
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

    /**
     * Initializes the selected date value with initial or current date
     */
    private initSelectedValue() {
        /**
         * Set select value if empty
         */
        if (this._selectedValue === null) {
            if (this._initialValue === null) {
                this._selectedValue = moment();
                /**
                 * Clean seconds and milliseconds for initial values
                 */
                this._selectedValue.second(0);
                this._selectedValue.millisecond(0);
            } else {
                this._selectedValue = this._initialValue;
            }
        }
    }

    // #endregion Private Methods
}

// #endregion Exported Classes
