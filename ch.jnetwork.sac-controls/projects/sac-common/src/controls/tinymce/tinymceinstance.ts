import { SacTinyMceCommon } from './tinymce';

/**
 * Interface for TinyMCE access to the Angular component
 */
export interface TinyMceInstance {
    // #region Properties

    /**
     * Instance of Angular component
     */
    angular: SacTinyMceCommon;

    // #endregion Properties
}
