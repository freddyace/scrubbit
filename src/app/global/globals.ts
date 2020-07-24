import { Injectable } from '@angular/core';
import { ISession } from '../session/session';
import { IBaseDto } from '../dto/base.dto';
import { ILoginResponse } from '../response/login.response';
import { IService } from '../entity/service';

@Injectable()
export class Globals {
  loginResponse: ILoginResponse = {
    message: "",
    resultCode: null,
    session: {
      sessionId: null,
      lastLogin: null,
      serviceList: [],
      vehicleList: [],
      transactionList: [],
      cart: {
        name: ""
      },
      expirationDateTime: null,
      user: {
        userFirstname:null,
        userMiddlename:null,
        userLastname:null,
        userPassword:null,
        userEmail:null,
        userImagePath:null,
        userDob:null,
        userAddressId:null,
        createDate:null,
        lastUpdate:null
      },
      token: null,
      baseDto:{    
        userLocationList: [], 
        vehicleList: [],
        transactionList: [],
      },
    }
  }
  loginAlert: string = "";
  hasAlert: boolean = false;
  _session: ISession = undefined;
  loading: boolean = false;
  addVehicle1_form_field_error = false;
  addVehicle2_form_field_error = false;
  addLocation_street_field1 = "";
  addLocation_street_field2 = "";
  
  public setLoading(): void{
    this.loading = true;
  }
  public setLoadingDone(): void {
    this.loading = false;
  }
  get session(): ISession {
    return this._session
  }

  set session(sess: ISession){
    this._session = sess;
  }

  getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
  
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
      os = 'Linux';
    }
  
    return os;
  }
  
}