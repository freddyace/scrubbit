import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from './login/service/user.service';
import { Router } from '@angular/router';
import { Globals } from './global/globals';
import { ThemePalette } from '@angular/material/core';
import { MatSpinner, ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  hasAlert = false;
  formTitle = "Register";
  alerts = "";
  loading = false;
  notLoading = true;
  formIsValid = false;
  title = 'splashapp';
  private cookieValue: string;
  
  constructor(private userService: UserService, private router:Router, 
    public globals:Globals, private cookieService: CookieService){
      this.loading = this.globals.loading;
      console.log("app component this.loading = "+this.loading);
    }

  public ngOnInit(): void {
    this.cookieService.set('cookie-name', 'cookieValue');
    console.log(this.cookieService.get('cookie-name'));
  }

  public setLoading(): void{
    this.globals.loading=true;
  }
  public setLoadingComplete(): void {
    this.globals.loading=false;
  }
}
