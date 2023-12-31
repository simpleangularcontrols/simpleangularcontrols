/**
 * interface for service which provides icons to components
 */
export interface ISacIconService {
  // #region Public Getters And Setters

  /**
   * Delete icon for file browser component
   */
  get BrowserComponentDeleteIcon(): string
  /**
   * Edit icon for file browser component
   */
  get BrowserComponentEditIcon(): string
  /**
   * Folder icon for closed folders in the browser component tree
   */
  get BrowserComponentFolderClosedIcon(): string
  /**
   * Folder icon for folders without subfolders in the browser component tree
   */
  get BrowserComponentFolderEmptyIcon(): string;
  /**
   * Folder icon for new folders in the browser component
   */
  get BrowserComponentFolderNewIcon(): string
  /**
   * Folder icon for open folders in the browser component tree
   */
  get BrowserComponentFolderOpenIcon(): string
  /**
   * Refresh icon for file browser component
   */
  get BrowserComponentRefreshIcon(): string
  /**
   * default image for confirm dialog. currently is required a png image path
   */
  get ConfirmDefaultImage(): string;
  /**
   * icon to open context menu
   */
  get ContextMenuOpenIcon(): string;
  /**
   * icon for select button in date component
   */
  get DateComponentSelectorIcon(): string;
  /**
   * icon for select button in datetime component
   */
  get DateTimeComponentSelectorIcon(): string;
  /**
   * Icon for switching to the next month in the DateTimSelector component
   */
  get DateTimeSelectorComponentMonthNextIcon(): string;
  /**
 * Icon for switching to the previous month in the DateTimSelector component
 */
  get DateTimeSelectorComponentMonthPrevIcon(): string;
  /**
   * sort down icon for grid
   */
  get GridComponentSortDown(): string;
  /**
   * sort up icon for grid
   */
  get GridComponentSortUp(): string;
  /**
   * icon for select button in time component
   */
  get TimeComponentSelectorIcon(): string;
  /**
   * browse icon in upload component
   */
  get UploadComponentBrowseIcon(): string;
  /**
   * icon to continue uploads in uplaod component
   */
  get UploadComponentContinueIcon(): string;
  /**
   * icon to delete files in upload component
   */
  get UploadComponentDeleteIcon(): string;
  /**
   * icon to pause uploads in upload component
   */
  get UploadComponentPauseIcon(): string;
  /**
   * icon to upload file to server in upload component
   */
  get UploadComponentUploadIcon(): string;

  // #endregion Public Getters And Setters
}
