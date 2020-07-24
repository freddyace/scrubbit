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
import { plainToClass } from "class-transformer";

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
    this.hasAlert=globals.hasAlert;
  }
  
  login(){
    this.formIsValid = this.validateForm();
    if(this.formIsValid){
      this.globals.setLoading();
      this.loginCredential.username = this.emailAddressControl.value;
      this.loginCredential.password = this.passwordControl.value;
        this.userService.logIn(this.loginCredential).subscribe(
          response => {
            console.log(response.session);
            if(response.resultCode == 404040){
              console.log(response.session.baseDto);
              this.globals._session = response.session;
              this.globals.loading = false;
              this.globals.hasAlert = false;
              this.cookieService.set('sessionId',response.session.sessionId);
              console.log("Saving the following sessionId for session: "+ response.session.sessionId);
              this.router.navigate(['/dashboard']);
            }else{
              this.globals.loading = false;
              this.globals.hasAlert = true;
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
    console.log("OS detected: "+this.globals.getOS())
    let cookie = this.cookieService.get("sessionId");
    console.log(cookie);
    this.globals.loading = true;
    this.userService.retrieveState(cookie).subscribe(
      response => {
        console.log(response);
        if(response.resultCode == 303005){
          console.log("response code: "+response.resultCode);
          this.router.navigate(["/login"]);
          this.globals.loading=false;
        }
        else{
          console.log("Existing session found!");
          this.globals._session = response.session;
          this.globals.loading=false;
          this.router.navigate(['/dashboard']);
        }
      }
    );

  }

}
