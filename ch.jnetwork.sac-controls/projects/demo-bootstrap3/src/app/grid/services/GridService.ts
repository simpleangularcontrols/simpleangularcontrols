import { GridItemDto } from '../models/GridItemDto';
import { GridRequestDto } from '../models/GridRequestDto';
import { GridResultDto } from '../models/GridResultDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GridService {
    // #region Constructors

    constructor(private http: HttpClient) {}

    // #endregion Constructors

    // #region Public Methods

    public GetItems(request: GridRequestDto): Observable<GridResultDto<GridItemDto>> {
        return this.http.post<GridResultDto<GridItemDto>>('/api/grid/items', request);
    }

    // #endregion Public Methods
}
