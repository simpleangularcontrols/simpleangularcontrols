import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from './AuthenticationService';
import { catchError, finalize, filter, take, switchMap } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  // Token Refresh Flag für Synchronisation der Asynch Calls
  isRefreshingToken: boolean = false;
  // Objekt zur Synchronisierung von neuen Tokens
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  constructor(public auth: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(this.AddToken(request, this.auth.GetToken()))
      .pipe(
      catchError((error: any) => {
        if (request.url.endsWith('/api/auth/token')) {
          // Handle Error für Access Token API
          this.auth.Logout();
          return throwError({ status: error.status, message: error.message });
        } else {
          // Handle Error für alle URL's
          if (error instanceof HttpErrorResponse) {
            switch (error.status) {
              case 0:
                return throwError({ status: error.status, message: 'Unable to connect to server, please contact admin' });
              case 401:
                return this.Handle401Error(request, next);
              case 400:
              case 403:
              case 404:
              case 500:
              default:
                return throwError(error);
            }
          } else if (error.error instanceof ErrorEvent) { // Client Side Error
            return throwError({ status: error.status, message: error.message });
          } else {  // Server Side Error
            return throwError({ status: error.status, message: error.message });
          }
        }
      }));

  }

  // Token Header in Request dazufügen
  AddToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({ setHeaders: { Authorization: 'Bearer ' + token } });
  }

  // Handling für 401 Error.
  Handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Check ob Token Refresh bereits gestartet
    if (!this.isRefreshingToken) {
      // Token Refresh Flag setzen
      this.isRefreshingToken = true;

      // Reset here so that the following requests wait until the token
      // comes back from the refreshToken call.
      this.tokenSubject.next(null);

      // Token Refresh via Service
      return this.auth.RefreshToken()
        .pipe(switchMap((newaccesstoken: string) => {
          if (newaccesstoken) {
            this.tokenSubject.next(newaccesstoken);
            return next.handle(this.AddToken(request, newaccesstoken));
          }
          // return <any>this.auth.Logout();
        }),
        // Fehler Handling beim Token-Refresh
        catchError(err => {
          this.tokenSubject.next('');
          return next.handle(request);
          // return throwError(err);
        }),
        finalize(() => {
          // Token Refresh in jedem Fall auf FALSE stellen
          this.isRefreshingToken = false;
        })
        );
    } else {
      // Token Refresh Flag deaktivieren
      this.isRefreshingToken = false;

      // Fallback mit neuem Token ausführen Prozess wird hier solange blockiert bis ein neues Token vorhanden ist.
      return this.tokenSubject
        .pipe(filter(token => token != null), take(1), switchMap(token => {
          if (token === '') {
            return next.handle(request);
          } else {
            return next.handle(this.AddToken(request, token));
          }
        }));
    }
  }
}
