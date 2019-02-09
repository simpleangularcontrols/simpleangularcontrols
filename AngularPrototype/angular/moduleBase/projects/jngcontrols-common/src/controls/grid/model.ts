export class PagerData {
    TotalRowCount: number = 0;
    CurrentPageIndex: number = 0;
    PageSize: number = 0;
}

export class GridResponse<T> {
    TotalRowCount: number;
    Data: T[]
}

export class SortDescriptor {
    SortColumn: string;
    SortOrder: SortOrder;

    SkipCount: number;
    TakeCount: number;
}

export enum SortOrder {
    Async = 1,
    Desc = 2
}
