import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
      private authenticationService: AuthenticationService,
      private router: Router
  ) { }

  ngOnInit() {
  }


  logoutUser () {
    this.authenticationService.logout({}).subscribe(
        res => {
            this.router.navigate(['/login']);
        }
    );
  }

}
