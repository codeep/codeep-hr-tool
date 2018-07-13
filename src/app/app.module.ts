import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { HomeComponent } from './home/home.component';
import { routing } from "./app.routing";
import {UserService} from "../services/user.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthenticationService} from "../services/authentication.service";
import {CookieService} from "ngx-cookie-service";
import {AuthGuard} from "../guards/auth.guard";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        ConfirmComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        routing,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        AuthGuard,
        UserService,
        AuthenticationService,
        CookieService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
