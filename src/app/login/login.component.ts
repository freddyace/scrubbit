import { Component, OnInit } from '@angular/core';
import {Globals } from '../global/globals';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from './service/user.service';
import { Router } from '@angular/router';
import { ILoginCredential } from '../login/credentials/login.credential'
import { ISession } from '../session/session';
import { CookieService } from 'ngx-cookie-service';
import { ThemePalette } from '@angular/material/core';
import { MatSpinner, ProgressSpinnerMode } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
    '../../assets/bootstrap/css/bootstrap.min.css',
    '../../assets/fonts/font-awesome.min.css'
  ]
})
export class LoginComponent implements OnInit {
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  hasAlert = false;
  formTitle = "Register";
  loginAlert = "";
  loading = false;
  notLoading = true;
  formIsValid = false;
  emailAddressControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required]);
  loginCredential : ILoginCredential = {
    username:null,
    password:null,
  };
  
  constructor(private userService: UserService, private router:Router, 
    public globals:Globals, private cookieService: CookieService) { 
    console.log("inside constructor");
    this.hasAlert=globals.hasAlert;
    console.log("Alerts: "+this.loginAlert);
    console.log("Has alert: "+ this.hasAlert);
  }
  
  login(){
    console.log("Loggin in.");
    console.log("Password is: "+ this.passwordControl.value);
    console.log("Email is: "+ this.emailAddressControl.value);
    this.formIsValid = this.validateForm();
    if(this.formIsValid){
      //this.loading = true;
      this.globals.setLoading();
      this.loginCredential.username = this.emailAddressControl.value;
      this.loginCredential.password = this.passwordControl.value;
        this.userService.logIn(this.loginCredential).subscribe(
          response => {
            if(response.resultCode == 404040){
              //this.loading = false;
              this.globals.setLoadingDone
              //this.notLoading=true;
              this.globals.session = response.session;
              console.log("Saving cookie: "+ this.globals.session.sessionId)
              this.cookieService.set('sessionId',this.globals.session.sessionId)
              this.router.navigate(['/dashboard']);
            }else{
              //this.loading = false;
              this.hasAlert = true;
              this.globals.loginAlert = "Authentication failed";
              this.router.navigate(['/login']);
            }
          }
        );
    }
 
  }
  validateForm(): boolean{
    return true;
  }

  ngOnInit(): void {
  }

}
