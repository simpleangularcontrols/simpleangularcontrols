import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public GetUsers(): Observable<string[]> {
    
    return this.http.get<string[]>("http://localhost:54538/api/user");

  }

}
