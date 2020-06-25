import { Component, OnInit } from '@angular/core';
import { UserService } from '../login/service/user.service';
import { Router } from '@angular/router';
import { Globals } from '../global/globals';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css',
  "../../assets/bootstrap/css/bootstrap.min.css",
  "../../assets/fonts/font-awesome.min.css",
  "../../assets/css/Pricing-Table---EspacioBinariocom.css",
  "../../assets/css/Wave-Button.css"
]
})
export class MyOrdersComponent implements OnInit {

  constructor(private userService: UserService, private router:Router, 
    public globals:Globals, private cookieService: CookieService) { }

  
  ngOnInit(): void {
  }

}
