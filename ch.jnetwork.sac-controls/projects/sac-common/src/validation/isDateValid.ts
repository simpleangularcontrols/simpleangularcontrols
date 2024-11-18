import * as moment_ from 'moment';
import { Moment } from 'moment';

// #region Variables

/**
 * Moment
 */
export const moment = moment_['default'];

// #endregion Variables

// #region Functions

export function isDateValid(value: any, format: string) {
  // NULL ist gültig
  if (value === null || value === undefined || value === '') {
    return true;
  }

  // Check is Iso Date (From API Call)
  if (moment(value, moment_.ISO_8601, true).isValid()) {
    return true;
  }

  let date: Moment = moment(value, [format], true);
  date = date.utc();

  return date.isValid();
}

// #endregion Functions

