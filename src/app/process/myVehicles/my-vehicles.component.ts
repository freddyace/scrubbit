import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/login/service/user.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Globals } from 'src/app/global/globals';
import { IVehicle } from 'src/app/dashboard/vehicle/vehicle';

@Component({
  selector: 'app-my-vehicles',
  templateUrl: './my-vehicles.component.html',
  styleUrls: ['./my-vehicles.component.css',
  "../../../assets/bootstrap/css/bootstrap.min.css",
   "../../../assets/fonts/font-awesome.min.css",
   "../../../assets/fonts/ionicons.min.css",
  // "../../assets/fonts/material-icons.min.css",
   "../../../assets/css/Bold-BS4-Responsive-Pricing-Table-Snippet.css",
  //"../../assets/css/button.css",
   //"../../assets/css/Pricing-Table---EspacioBinariocom.css",
   "../../../assets/css/Social-Icon-Circle.css",
   "../../../assets/css/Wave-Button.css"

]
})
export class MyVehiclesComponent implements OnInit {
    vehicleList : IVehicle[] = [];
    hasVehicles : boolean = false;
  
  constructor(private userService: UserService, private cookieService:CookieService,
    private router:Router, public globals:Globals) { 

    }

  ngOnInit(): void {
    this.vehicleList = this.globals.session.baseDto.vehicleList;
    if(this.vehicleList.length != 0){
      this.hasVehicles = true;
    }
    console.log("has vehicles? :" + this.hasVehicles);
  }
  log(): void {
    
  }

}
