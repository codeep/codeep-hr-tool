import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../environments/environment";
import { map } from 'rxjs/operators';
import {User} from "../models/user";
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class AuthenticationService {
    cookieValue: any;
    constructor(
        private http: HttpClient,
        private cookieService: CookieService
    ) { }

    login(user:User) {
        return this.http.post(`${environment.api.apiUrl}/api/users/login`, user)
            .pipe(map(user => {
                this.cookieValue = user;
                if (user) {
                    this.cookieService.set( 'currentUser',JSON.stringify(this.cookieValue.id));
                    // localStorage.setItem('currentUser', JSON.stringify(user));
                }
                return user;
            }));
  }

    logout() {
        // remove user from Cookies to log user out
        this.cookieService.delete('currentUser');
    }
}