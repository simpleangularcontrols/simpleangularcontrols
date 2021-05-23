import { Observable } from 'rxjs';
import { GridItemDto } from '../models/GridItemDto';
import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GridResultDto } from '../models/GridResultDto';
import { GridRequestDto } from '../models/GridRequestDto';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  constructor(private http: HttpClient) { }

  public GetItems(request: GridRequestDto): Observable<GridResultDto<GridItemDto>> {

    return this.http.post<GridResultDto<GridItemDto>>('http://localhost:55768/api/grid/items', request);

  }
}
