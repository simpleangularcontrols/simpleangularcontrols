import { Moment } from 'moment';
import * as moment_ from 'moment';
/**
 * Moment
 */
export const moment = moment_['default'];

export function isDateValid(value: any, format: string) {
  // NULL ist gültig
  if (value === null || value === undefined || value === '') {
    return true;
  }

  let date: Moment = moment(value, [format], true);
  date = date.utc();

  return date.isValid();
}
