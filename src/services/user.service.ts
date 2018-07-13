import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User} from "../models/user";
import {environment} from "../environments/environment";


@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    register(user: User) {
        return this.http.post(`${environment.api.apiUrl}/api/users/registration`, user);
    }

    updateCode(user: User) {
        return this.http.post(`${environment.api.apiUrl}/api/users/verification`, user);
    }

    confirm(user: User) {
        return this.http.post(`${environment.api.apiUrl}/api/users/confirm`, user);
    }
}