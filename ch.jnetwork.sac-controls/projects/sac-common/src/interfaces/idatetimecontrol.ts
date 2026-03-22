/**
 * Interface to extend FormControl with datetime parser format and value semantics.
 *
 * Controls that implement this interface expose a date/time format string used for validation
 * and conversion, and carry the current model value.
 */
export interface IDateTimeControl {
    // #region Properties

    /**
     * Date/time format pattern used by the control (moment.js format string).
     */
    datetimeformatstring: string;

    /**
     * The current value of the datetime control.
     */
    value: any;

    // #endregion Properties
}
