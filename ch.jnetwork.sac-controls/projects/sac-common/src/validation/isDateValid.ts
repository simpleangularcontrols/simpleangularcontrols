import moment, { Moment } from 'moment';

// #region Exported Functions

/**
 * Checks whether a value is a valid date for a given format or ISO 8601.
 *
 * @param value Input value to validate.
 * @param format Date format string for the validator.
 * @returns True if value is valid date, otherwise false.
 */
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
