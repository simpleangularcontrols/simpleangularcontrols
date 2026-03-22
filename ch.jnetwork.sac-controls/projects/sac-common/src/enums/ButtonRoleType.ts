/**
 * Available CSS role types for button styling. These values map to Bootstrap button style classes.
 */
export type BUTTONROLETYPE =
    /** no specific role, uses default styling */
    | ''
    /** primary accent button */
    | 'primary'
    /** default button */
    | 'default'
    /** light variant */
    | 'light'
    /** dark variant */
    | 'dark'
    /** hyperlink-like variant */
    | 'link'
    /** success indicator style */
    | 'success'
    /** secondary button style */
    | 'secondary'
    /** danger/(error) style */
    | 'danger'
    /** warning style */
    | 'warning'
    /** info style */
    | 'info';
