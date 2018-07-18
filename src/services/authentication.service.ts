import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../environments/environment";
import { map } from 'rxjs/operators';
import {User} from "../models/user";
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class AuthenticationService {
    expiredDate: any;
    data: any;
    constructor(
        private http: HttpClient,
        private cookieService: CookieService
    ) { }

    login(user:User) {
        return this.http.post(`${environment.api.apiUrl}/api/users/login`, user)
            .pipe(map(data => {
                this.data = data;
                if (data) {
                    this.expiredDate =  new Date();
                    this.expiredDate.setDate( this.expiredDate.getDate() + 7 );
                    this.cookieService.set( 'cookieId',JSON.stringify(this.data.cookie),this.expiredDate);
                    // localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return data;
            }));
  }

    logout(obj) {
        // remove user from Cookies to log user out
        this.cookieService.delete('cookieId');
        return this.http.post(`${environment.api.apiUrl}/api/users/logout`, obj);
    }

    checkUserSession (obj) {
        return this.http.post(`${environment.api.apiUrl}/api/users/user/isLoggedIn`,obj);
    }
}