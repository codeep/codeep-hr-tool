import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
    id: string;
    code: number;
    data: any;
    loading = false;

    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.route.queryParams.subscribe(params => {
            this.id = params['data'];
        });
    }

    ngOnInit() {
    }

    refreshCode() {
        this.userService.updateCode({id: this.id}).subscribe(res => {
                console.log(res, "res");
            }
        );
    }

    confirmCode() {
        this.userService.confirm( { confirmCode: this.code, id: this.id }).subscribe(res => {
                this.data = res;
                if (this.data.status === "active") {
                    this.router.navigate(['/home']);
                }
            },
            error => this.loading = true
        );
    }

}
