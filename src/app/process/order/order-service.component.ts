import { Component, OnInit } from '@angular/core';
import {Globals } from '../../global/globals';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../login/service/user.service';
import { Router } from '@angular/router';
import { ILoginCredential } from '../../login/credentials/login.credential'
import { ISession } from '../../session/session';
import { CookieService } from 'ngx-cookie-service';
import { IVehicle } from 'src/app/dashboard/vehicle/vehicle';
import { IService } from 'src/app/entity/service';

@Component({
  selector: 'app-order-service',
  templateUrl: './order-service.component.html',
  styleUrls: ['./order-service.component.css',
  "../../../assets/bootstrap/css/bootstrap.min.css",
  "../../../assets/fonts/font-awesome.min.css"
]
})
export class OrderServiceComponent implements OnInit {
    fullName: string;
    vehicleList: IVehicle[] = [];
    vehicle: IVehicle = {
      vehicleLicenseNum: "",
      vehicleColor: "",
      vehicleMake: "",
      vehicleType: "",
      vehicleModel: "",
      vehiclePhotoPath: "",
      vehicleYear: "",
      userId: ""
    };
    service: IService = {
      serviceId: null,
      servicePrice: null,
      serviceLocationId: null,
      serviceStatusShort: null,
      createDate: null,
      lastUpdate: null,
      serviceTypeId: null,
      financialTransactionId: null,
      eventId: null,
      serviceStatusId: null,
      serviceDate: null
    }
    phone: "";
    dateString: "";
    comments: "";

  constructor(private userService: UserService, private router:Router, 
    public globals:Globals, private cookieService: CookieService) { }

  ngOnInit(): void {
    //Reload session
    let cookie = this.cookieService.get("sessionId");
    console.log(cookie);
    this.globals.loading = true;
    if(this.globals._session == null||this.globals._session == undefined){
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


    //Repopulate stuffzz
    this.fullName = this.globals._session.user.userFirstname + " "+ this.globals._session.user.userLastname;
    console.log("Full name: "+ this.fullName);
    this.vehicleList = this.globals._session.baseDto.vehicleList;
    console.log(this.vehicleList);

  }
  selectVehicle(vehicle){
    this.vehicle = vehicle;
  }
  setServiceTime(timeString){
    this.service.serviceDate = timeString; //TODO: may have to trim this part
  }
  goToDashboard(){
    this.router.navigate(['dashboard']);
  }

}
