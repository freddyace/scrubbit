import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/login/service/user.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Globals } from 'src/app/global/globals';
import { IUserLocation } from 'src/app/entity/user.location';

@Component({
  selector: 'app-add-location2',
  templateUrl: './add-location2.component.html',
  styleUrls: ['./add-location2.component.css',
  "../../../../assets/bootstrap/css/bootstrap.min.css",
   "../../../../assets/fonts/font-awesome.min.css",
   "../../../../assets/css/Pricing-Table---EspacioBinariocom.css"
]
})
export class AddLocation2Component implements OnInit {

  zipControl = new FormControl('', [Validators.required]);
  cityControl = new FormControl('', [Validators.required]);
  stateControl = new FormControl('', [Validators.required]);
  locationNameControl = new FormControl('', [Validators.required]);
  userLocation : IUserLocation = {
    userLocationId: null,
    streetAddress1: "",
    streetAddress2: "",
    city: "",
    state: "",
    zip: ""

  }
  constructor(private userService: UserService, private cookieService:CookieService,
    private router:Router, public globals:Globals) { }

  validate(): void {
    console.log("Validating form 2 - Add Location")
    let hasErrors = false;
    if(this.zipControl.invalid){
      hasErrors = true;
    }
    if(this.cityControl.invalid){
      hasErrors = true;
    }
    if(this.stateControl.invalid){
      hasErrors = true;
    }
    if(hasErrors){
      console.log("Error detected...")
      this.globals.hasAlert = true;
      this.globals.addVehicle2_form_field_error = true;
      return
    }
    this.userLocation.streetAddress1=this.globals.addLocation_street_field1;
    this.userLocation.streetAddress2=this.globals.addLocation_street_field2;
    this.userLocation.city = this.cityControl.value;
    this.userLocation.state = this.stateControl.value;
    this.userLocation.zip = this.zipControl.value;
    this.userService.postLocation(this.userLocation).subscribe(
      response => {
        if(response.resultCode == 440499){
          this.router.navigate(["/success"]);
        }
        else{
          this.router.navigate(["/dashboard"]);
        }
    });
  }
  ngOnInit(): void {
    this.globals.hasAlert = false;
  }

}
