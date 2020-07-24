import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/login/service/user.service';
import { IVehicle } from 'src/app/dashboard/vehicle/vehicle';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Globals } from 'src/app/global/globals';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css',
'../../../assets/bootstrap/css/bootstrap.min.css',
'../../../assets/fonts/ionicons.min.css',
'./button.css',
'./Login-Form-Clean.css']
})
export class AddVehicleComponent implements OnInit {
  plateNumControl = new FormControl('', [Validators.required]);  
  newVehicle = "Add new vehicle";
  additonalNotesControl = new FormControl('', [Validators.required]);
    YearList = ['1990', '1991', '1992', '1993','1994', '1995', '1996',
  '1997', '1998', '1999', '2000','2001', '2002', '2003', '2004','2005', '2006', '2007',
  '2008', '2009', '2010', '2011','2012', '2013', '2014', '2015','2018', '2019', '2020',
  ];
    MakeList = [
      'Audi', 'BMW', "Chystler", "Dodge", "Ford", 
      "Honda", "Hyundai", "Jaguar", "Kia", "Nissan", "Porsche", 
      "Tesla", "Volkswagen"
  ];
  ModelList = ['R8', 'i8','3 Series SEDAN', '4 Series', '5 Series', 'Chrystler 200', 'Charger'];
  ColorList = ['Blue', 'Green', 'Red', 'Silver', 'Teal', 'White', 'Burgundy', 'Gold', 'Gray', 'Black'];
  vehicle: IVehicle = {
    vehicleLicenseNum: "",
    vehicleMake: "",
    vehicleYear: "",
    vehicleColor: "",
    vehicleType: "",
    vehiclePhotoPath: "",
    userId: "",
    vehicleModel: ""
  }
  constructor(private userService: UserService, private cookieService:CookieService,
    public globals:Globals, private router:Router) { }

  ngOnInit(): void {
  }

  addVehicleYear(item): void{
    this.newVehicle = item;
    this.vehicle.vehicleYear=item;
  }
  addVehicleMake(item): void{
    this.newVehicle += " "+item;
    this.vehicle.vehicleMake=item;
  }
  addVehicleModel(item): void{
    this.newVehicle += " "+item;
    this.vehicle.vehicleModel = item;
  }
  addVehicleColor(item): void{
    console.log("In add vehicle color");
    this.newVehicle = item + ", " +this.newVehicle;
  }
  submitForm(){
    this.vehicle.userId="1";
    console.log("Cookie in scope: "+ this.cookieService.get('sessionId'));
    this.userService.postVehicle(this.vehicle, this.cookieService.get('sessionId')).subscribe(
      data => {
        console.log(data)
        if(data.resultCode==404556){
          console.log("Success");
          this.globals._session = data.session;
          this.router.navigate(['/success']);
          
        }
        else {
          console.log("An error occured...");
        }
      }
    );
  }

}
