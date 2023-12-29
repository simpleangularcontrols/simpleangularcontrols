/**
 * interface for service which provides icons to components
 */
export interface ISacIconService {
  /**
   * icon for select button in date component
   */
  get DateComponentSelectorIcon(): string;
  /**
   * icon for select button in time component
   */
  get TimeComponentSelectorIcon(): string;
  /**
   * icon for select button in datetime component
   */
  get DateTimeComponentSelectorIcon(): string;
  /**
   * sort up icon for grid
   */
  get GridComponentSortUp(): string;
  /**
   * sort down icon for grid
   */
  get GridComponentSortDown(): string;
  /**
   * default image for confirm dialog. currently is required a png image path
   */
  get ConfirmDefaultImage(): string;

  /**
   * browse icon in upload component
   */
  get UploadComponentBrowseIcon(): string;
  /**
   * icon to delete files in upload component
   */
  get UploadComponentDeleteIcon(): string;
  /**
   * icon to pause uploads in upload component
   */
  get UploadComponentPauseIcon(): string;
  /**
   * icon to continue uploads in uplaod component
   */
  get UploadComponentContinueIcon(): string;
  /**
   * icon to upload file to server in upload component
   */
  get UploadComponentUploadIcon(): string;
}
