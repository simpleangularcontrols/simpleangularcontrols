import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GridItemDto } from '../models/GridItemDto';
import { GridRequestDto } from '../models/GridRequestDto';
import { GridResultDto } from '../models/GridResultDto';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor(private http: HttpClient) { }

  public GetItems(request: GridRequestDto): Observable<GridResultDto<GridItemDto>> {

    return this.http.post<GridResultDto<GridItemDto>>('/api/grid/items', request);

  }
}
