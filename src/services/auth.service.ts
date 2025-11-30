import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { loginUrl } from '../constant/api.constant';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private _http: HttpClient) {}

  loginAdmin(reqBody: any): Observable<{token: string}> {
    const url = `${loginUrl}`;
    return this._http
      .post<{token: string}>(url, reqBody)
      .pipe(
        tap(res=> res)
        // catchError((error) => {
        //   console.error('Error in admin login', error);
        //   return throwError(() => error);
        // })
      );
  }
}
