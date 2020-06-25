import { Component, OnInit } from '@angular/core';
import {Globals } from '../../global/globals';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../login/service/user.service';
import { Router } from '@angular/router';
import { ILoginCredential } from '../../login/credentials/login.credential'
import { ISession } from '../../session/session';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-order-service',
  templateUrl: './order-service.component.html',
  styleUrls: ['./order-service.component.css',
  "../../../assets/bootstrap/css/bootstrap.min.css",
  "../../../assets/fonts/font-awesome.min.css",
  // "assets/fonts/ionicons.min.css",
  // "assets/css/Bootstrap-Callout-Success.css",
  // "assets/css/button-1.css",
  // "assets/css/Button-thib.css",
  // "assets/css/button.css",
  // "assets/css/Contact-Form-Clean.css",
  // "assets/css/Contact-Form-v2-Modal--Full-with-Google-Map.css",
  // "assets/css/dashboard.css",
  // "assets/css/Features-Boxed.css",
  // "assets/css/gradient-navbar-1.css",
  // "assets/css/gradient-navbar.css",
  // "assets/css/Hover-Button-1.css",
  // "https://cdn.jsdelivr.net/npm/lightpick@1.3.4/css/lightpick.min.css",
  // "assets/css/login-form-1.css",
  // "assets/css/Login-Form-Clean-1.css",
  // "assets/css/Login-Form-Clean.css",
  // "../../.assets/css/styles.css",
  // "../../../assets/css/untitled.css"
]
})
export class OrderServiceComponent implements OnInit {

  constructor(private userService: UserService, private router:Router, 
    public globals:Globals, private cookieService: CookieService) { }

  ngOnInit(): void {

  }

  goToDashboard(){
    this.router.navigate(['dashboard']);
  }

}
