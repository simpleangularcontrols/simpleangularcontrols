import moment, { Moment } from 'moment';

// #region Exported Functions

export function isDateValid(value: any, format: string) {
    // NULL is valid
    if (value === null || value === undefined || value === '') {
        return true;
    }

    // Check is Iso Date (From API Call)
    if (moment(value, moment.ISO_8601, true).isValid()) {
        return true;
    }

    let date: Moment = moment(value, [format], true);
    date = date.utc();

    return date.isValid();
}

// #endregion Exported Functions
