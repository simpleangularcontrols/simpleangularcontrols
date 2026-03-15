import { SortOrder } from '@simpleangularcontrols/sac-common';

export class GridRequestDto {
    // #region Properties

    public NewPageIndex: number;
    public PageSize: number;
    public SortDirection: SortOrder = SortOrder.None;
    public SortKey: string = null;

    // #endregion Properties
}
