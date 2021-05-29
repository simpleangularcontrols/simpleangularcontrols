import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  /**
   * Benutzer via OAuth einloggen
   * @param username
   * @param password
   */
  public Login(username: string, password: string): void {

    this.http.post('http://localhost:54538/api/auth/token', 'username=' + username + '&password=' + password + '&grant_type=password').subscribe((result: AuthResponse) => {

      sessionStorage.setItem('auth.accesstoken', result.access_token);
      sessionStorage.setItem('auth.refreshtoken', result.refresh_token);

    }, (error) => {

    });
  }

  /**
   * Neues Access Token beim Server holen
   */
  public RefreshToken(): Observable<string> {
    return this.http.post<AuthResponse>('http://localhost:54538/api/auth/token', 'refresh_token=' + sessionStorage.getItem('auth.refreshtoken') + '&grant_type=refresh_token')
      .pipe(map(result => {

        sessionStorage.setItem('auth.accesstoken', result.access_token);
        sessionStorage.setItem('auth.refreshtoken', result.refresh_token);

        return result.access_token;
      }));
  }

  // Logout des Benutzers
  public Logout(): void {
    sessionStorage.removeItem('auth.accesstoken');
    sessionStorage.removeItem('auth.refreshtoken');
  }

  /**
   * Token aus Session Storage zurückgeben
   */
  public GetToken(): string {
    const token: string = sessionStorage.getItem('auth.accesstoken');

    if (token === null || token === undefined) {
      return null;
    } else {
      return token;
    }
  }

}

/**
 * Klasse welche als Response vom Server gesendet wird
 */
class AuthResponse {

  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  has_multiple_mandant: boolean;
  mandant_id: number;
}
