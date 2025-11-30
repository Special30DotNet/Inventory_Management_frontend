import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { loginUrl } from '../constant/api.constant';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {

  constructor(private _http: HttpClient) {}

  loginAdmin(reqBody: any) {
    const url = `${loginUrl}`;
    return this._http
      .post(url, reqBody)
      .pipe(
        catchError((error) => {
          console.error('Error in admin login', error);
          return throwError(() => error);
        })
      );
  }
}
