import { SacTinyMceCommon } from './tinymce';

/**
 * Interace für den Zugriff von TinyMCE auf die Angular Component
 */
export interface TinyMceInstance {
  /**
   * Instanz von Angular Component
   */
  angular: SacTinyMceCommon;
}
