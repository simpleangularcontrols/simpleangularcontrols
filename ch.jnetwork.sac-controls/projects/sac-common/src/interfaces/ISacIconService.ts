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
}
