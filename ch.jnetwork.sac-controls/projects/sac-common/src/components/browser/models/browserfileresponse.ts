import { IBrowserFile } from './browserfile';

/**
 * Interface für API Response von Files
 */
export interface IBrowserFileResponse {
    // #region Properties

    /**
     * Array von Files in einem Node
     */
    Files: IBrowserFile[];

    // #endregion Properties
}
