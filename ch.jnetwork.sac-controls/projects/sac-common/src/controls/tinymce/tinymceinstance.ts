import { SacTinyMceCommon } from './tinymce';

/**
 * Interace für den Zugriff von TinyMCE auf die Angular Component
 */
export interface TinyMceInstance {
    // #region Properties

    /**
     * Instanz von Angular Component
     */
    angular: SacTinyMceCommon;

    // #endregion Properties
}
