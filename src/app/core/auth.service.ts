import { Injectable } from '@angular/core';
import { BehaviorSubject, map, of, throwError } from 'rxjs';
import { UserModel, UserRspModel } from '../data/user.model';
import { HttpClient } from '@angular/common/http';
import { API } from './constant';
import { BaseModel } from '../data/base.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userinfo$ = new BehaviorSubject<UserModel>({} as UserModel);
  private loginSuccess$ = new BehaviorSubject<boolean>(false);
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = API.BASE;
  }

  public get authenticated() {
    return this.loginSuccess$;
  }

  public login() {
    return this.http.get<UserRspModel>(`${this.baseUrl}/auth/login`).pipe(
      map((rsp) => {
        if (!rsp.error) {
          this.userinfo$.next(rsp.data);
          return of(true);
        } else {
          return throwError(() => new Error(rsp.message));
        }
      })
    );
  }

  public logout() {
    return this.http
      .get<BaseModel<boolean>>(`${this.baseUrl}/auth/logout`)
      .pipe(
        map((rsp) => {
          if (!rsp.error) {
            this.loginSuccess$.next(false);
            return of(true);
          } else {
            return throwError(() => new Error(rsp.message));
          }
        })
      );
  }
}
