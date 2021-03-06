import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    data: any;
    loading = false;
    loading_1 = false;
    loginForm: FormGroup;
    email: FormControl;
    password: FormControl;

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.createFormControls();
        this.createForm();
    }

    createFormControls() {

        this.email = new FormControl('', [
            Validators.required,
            Validators.pattern("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,6})+$")
        ]);

        this.password = new FormControl(
            '', [
                Validators.required,
                Validators.pattern(/^(?=.*?[a-z])(?=.*?[0-9]).{6,}$/)
            ]);

    };

    createForm() {
        this.loginForm = new FormGroup({
            email: this.email,
            password: this.password
        });
    };

    userLogin() {
        if (this.loginForm.invalid) {
            return;
        }
        this.authenticationService.login(this.loginForm.value).subscribe(
            res => {
                this.data = res;
                if (this.data.status === 'confirm') {
                    this.router.navigate(['/home']);
                }
            },
            error => {

                if (error.error.errors === 'wrong password or email') {
                        this.loading = true;
                    setTimeout(()=> {
                        this.loading = false;
                    }, 2000);
                }
                if (error.error.errors === 'wrong password') {
                    this.loading_1 = true;
                    setTimeout(()=> {
                        this.loading_1 = false;
                    }, 2000);
                }
            });
    }

}

//|| error.error === 'wrong password'