import { IBrowserFile } from './browserfile';

/**
 * Interface für API Response von Files
 */
export interface IBrowserFileResponse {
  /**
   * Array von Files in einem Node
   */
  Files: IBrowserFile[];
}
