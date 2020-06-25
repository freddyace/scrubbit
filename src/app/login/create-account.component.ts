import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { IUser } from './service/user';
import { AppRoutingModule } from '../app-routing.module';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Globals } from '../global/globals';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: [
    './create-account.component.css',
    '../../assets/bootstrap/css/bootstrap.min.css',
    '../../assets/fonts/font-awesome.min.css',
    '../../assets/fonts/ionicons.min.css',
  ]
})
export class CreateAccountComponent implements OnInit {
  hasAlert = false;
  formTitle = "Register";
  alert="";
  formIsValid = false;
  
  user : IUser = {
    userAddressId:null,
    userFirstname:"",
    userLastname:"",
    userDob:null,
    userEmail:"",
    userImagePath:null,
    userMiddlename:null,
    userPassword:"",
    createDate:null,
    lastUpdate:null
  };
  firstnameControl = new FormControl('', [Validators.required]);
  lastnameControl = new FormControl('', [Validators.required]);
  emailControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required]);
  confirmPasswordControl = new FormControl('', [Validators.required]);

  constructor(private userService: UserService, private router:Router, public globals:Globals) { }

  createAccount(): void {
    console.log("Inside createAccount()");
    this.validateForm();
    if(this.formIsValid){
      console.log("Attempting to post user...");
      this.userService.postUser(this.user).subscribe(
          data => {
            if(data.resultCode==303003){
              console.log("Setting globals..");
              this.globals.hasAlert=true;
              this.globals.loginAlert = data.message;
              this.router.navigate(['/login']);
            }else{ 
              this.router.navigate(['/dashboard']);
            }
          }
          ); 
    }
  }
  ngOnInit(): void {
 
  }

  validateForm(): void {
    console.log("Inside validateForm()");
    if(this.firstnameControl.invalid){
      this.hasAlert=true;
      this.alert = "First name is required!";
    }
    else if(this.lastnameControl.invalid){
      this.hasAlert=true;
      this.alert = "Last name is required!"
    }
    else if(this.emailControl.invalid){
      this.hasAlert=true;
      this.alert="Your email address is required!";
    }
    else if(this.passwordControl.invalid){
      this.hasAlert=true;
      this.alert="Password is required!";
    }
    else if(this.confirmPasswordControl.invalid){
      this.hasAlert=true;
      this.alert="Confirm password is required!";
    }
    else if(this.confirmPasswordControl.value != this.passwordControl.value){
      this.hasAlert=true;
      this.alert="Passwords do not match!";
      console.log("Original password input: "+this.passwordControl.value);
      console.log("Confirm password input: "+this.confirmPasswordControl.value);
    }
    else{
      this.hasAlert=false;
      this.user.userFirstname=this.firstnameControl.value;
      this.user.userLastname = this.lastnameControl.value;
      this.user.userEmail = this.emailControl.value;
      this.user.userPassword = this.passwordControl.value;
      console.log("Form is valid!");
      this.formIsValid = true;
    }
  }

}
