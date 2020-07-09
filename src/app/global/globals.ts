import { Injectable } from '@angular/core';
import { ISession } from '../session/session';
import { IBaseDto } from '../dto/base.dto';
import { ILoginResponse } from '../response/login.response';

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
  session: ISession = undefined;
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
}