import { IBrowserFile } from './browserfile';

/**
 * Interface for API response of files
 */
export interface IBrowserFileResponse {
    // #region Properties

    /**
     * Array of files in a node
     */
    Files: IBrowserFile[];

    // #endregion Properties
}
