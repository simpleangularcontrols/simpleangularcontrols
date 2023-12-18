import { SortOrder } from '@jnetwork/sac-common';

export class GridRequestDto {
  public NewPageIndex: number;
  public PageSize: number;
  public SortKey: string = null;
  public SortDirection: SortOrder = SortOrder.None;
}
