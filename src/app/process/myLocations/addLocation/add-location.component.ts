import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/login/service/user.service';
import { CookieService } from 'ngx-cookie-service';
import { Globals } from 'src/app/global/globals';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css',
  "../../../../assets/bootstrap/css/bootstrap.min.css",
  "../../../../assets/fonts/font-awesome.min.css",
  "../../../../assets/css/Pricing-Table---EspacioBinariocom.css",

]
})
export class AddLocationComponent implements OnInit {
  invalidFieldMessage = ""
  address1Control = new FormControl('', [Validators.required]);
  address2Control = new FormControl('', [Validators.required]);

  constructor(private userService: UserService, private cookieService:CookieService,
    private router:Router, public globals:Globals) {

   }

   validate(): void{
     console.log("Validating location input");
     if(this.address1Control.value == ""
     || this.address1Control.value == null){
      console.log("Error found"); 
      this.globals.hasAlert=true;
       this.globals.addVehicle1_form_field_error = true;
       this.invalidFieldMessage = "Street address 1 is required."
     }
     else{
       this.globals.addLocation_street_field1=this.address1Control.value;
       this.globals.addLocation_street_field2=this.address2Control.value;
       this.router.navigate(['/addLocation2']);
     }
   }

  ngOnInit(): void {
    this.globals.hasAlert = false;
    this.globals.addVehicle1_form_field_error = false;
    console.log("has alerts: "+this.globals.hasAlert);
  }

}
