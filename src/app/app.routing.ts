import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { AuthGuard } from "../guards/auth.guard";

const appRoutes: Routes = [
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'confirm', component: ConfirmComponent},


    // otherwise redirect to home
    {path: '**', redirectTo: 'login'},

];

export const routing = RouterModule.forRoot(appRoutes);