import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from "../../services/user.service";
import {Router, NavigationExtras} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    loading = false;

    registerForm: FormGroup;
    firstName: FormControl;
    lastName: FormControl;
    email: FormControl;
    password: FormControl;

    constructor(
        private userService: UserService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.createFormControls();
        this.createForm();
    }

    createFormControls() {
        this.firstName = new FormControl('', Validators.required);
        this.lastName = new FormControl('', Validators.required);

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
        this.registerForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
        });
    };

    registerUser() {
        this.userService.register(this.registerForm.value).subscribe(
            res => {
                let navigationExtras: NavigationExtras = {
                    queryParams: {
                        'data': res['id'],
                    }
                };
                this.router.navigate(['/confirm'], navigationExtras);
            },
            error => {
                error.error.errors.forEach(state => {
                    if (state.msg === 'E-mail already in use') {
                        this.loading = true;
                        setTimeout(()=> {
                            this.loading = false;
                        }, 2000);
                    }
                });
            }
        );
    }
}
