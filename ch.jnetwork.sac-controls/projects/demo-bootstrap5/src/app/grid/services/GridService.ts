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

    /**
     * Creates the grid service.
     * @param http Angular HTTP client used to call the backend.
     */
    constructor(private http: HttpClient) {}

    // #endregion Constructors

    // #region Public Methods

    /**
     * Loads grid items for the provided request.
     * @param request Grid request containing paging and sorting settings.
     * @returns Observable with grid result items.
     */
    public GetItems(request: GridRequestDto): Observable<GridResultDto<GridItemDto>> {
        return this.http.post<GridResultDto<GridItemDto>>('/api/grid/items', request);
    }

    // #endregion Public Methods
}
