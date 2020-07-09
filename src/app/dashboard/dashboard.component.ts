import { Component, OnInit } from '@angular/core';
import { Globals } from '../global/globals';
import { UserService } from '../login/service/user.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css',
  '../../assets/fonts/font-awesome.min.css',
  '../../assets/fonts/ionicons.min.css',
'../../assets/bootstrap/css/bootstrap.min.css']
})
export class DashboardComponent implements OnInit {

  userFirstName = this.globals.session.user.userFirstname;
  constructor(private userService: UserService, private cookieService:CookieService,
    private router:Router, public globals:Globals) { }

  ngOnInit(): void {

  }
  logoff(): void {
    console.log("Deleting cookie");
    this.cookieService.delete("sessionId");
    this.router.navigate(['/login']);
  }

}
