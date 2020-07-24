import { Component, OnInit } from '@angular/core';
import { ContentObserver } from '@angular/cdk/observers';
import { UserService } from 'src/app/login/service/user.service';
import { Router } from '@angular/router';
import { Globals } from 'src/app/global/globals';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-my-locations',
  templateUrl: './my-locations.component.html',
  styleUrls: ['./my-locations.component.css',
  "../../../assets/bootstrap/css/bootstrap.min.css",
  "../../../assets/fonts/font-awesome.min.css",
  "../../../assets/css/Pricing-Table---EspacioBinariocom.css"
]
})
export class MyLocationsComponent implements OnInit {

  constructor(private userService: UserService, private router:Router, 
    public globals:Globals, private cookieService: CookieService) { }

  ngOnInit(): void {
    console.log("In ngOnInit...");
    console.log(this.globals._session.baseDto.userLocationList);
    //console.log(this.globals.loginResponse.session);

  }

  log() {
    console.log("Test");
  }

}
