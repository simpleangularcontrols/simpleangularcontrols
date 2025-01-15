/**
 * interface for service which provides icons to components
 */
export interface ISacIconService {
  // #region Properties

  /**
   * Delete icon for file browser component
   */
  BrowserComponentDeleteIcon: string;
  /**
   * Edit icon for file browser component
   */
  BrowserComponentEditIcon: string;
  /**
   * Folder icon for closed folders in the browser component tree
   */
  BrowserComponentFolderClosedIcon: string;
  /**
   * Folder icon for folders without subfolders in the browser component tree
   */
  BrowserComponentFolderEmptyIcon: string;
  /**
   * Folder icon for new folders in the browser component
   */
  BrowserComponentFolderNewIcon: string;
  /**
   * Folder icon for open folders in the browser component tree
   */
  BrowserComponentFolderOpenIcon: string;
  /**
   * Refresh icon for file browser component
   */
  BrowserComponentRefreshIcon: string;
  /**
   * default image for confirm dialog. currently is required a png image path
   */
  ConfirmDefaultImage: string;
  /**
   * icon to open context menu
   */
  ContextMenuOpenIcon: string;
  /**
   * icon for select button in date component
   */
  DateComponentSelectorIcon: string;
  /**
   * icon for select button in datetime component
   */
  DateTimeComponentSelectorIcon: string;
  /**
   * Icon for switching to the next month in the DateTimSelector component
   */
  DateTimeSelectorComponentMonthNextIcon: string;
  /**
   * Icon for switching to the previous month in the DateTimSelector component
   */
  DateTimeSelectorComponentMonthPrevIcon: string;
  /**
   * Icon for HelpText Tooltip in any controls
   */
  GenericHelptextIcon: string;
  /**
   * sort down icon for grid
   */
  GridComponentSortDown: string;
  /**
   * sort up icon for grid
   */
  GridComponentSortUp: string;
  /**
   * Icon which is used by the InputSearch component on the button.
   */
  InputSearchButtonIcon: string;
  /**
   * icon for select button in time component
   */
  TimeComponentSelectorIcon: string;
  /**
   * browse icon in upload component
   */
  UploadComponentBrowseIcon: string;
  /**
   * icon to continue uploads in uplaod component
   */
  UploadComponentContinueIcon: string;
  /**
   * icon to delete files in upload component
   */
  UploadComponentDeleteIcon: string;
  /**
   * icon to pause uploads in upload component
   */
  UploadComponentPauseIcon: string;
  /**
   * icon to upload file to server in upload component
   */
  UploadComponentUploadIcon: string;

  // #endregion Properties
}
