import { Injectable } from '@angular/core';
import { ISession } from '../session/session';
import { IBaseDto } from '../dto/base.dto';
import { ILoginResponse } from '../response/login.response';

@Injectable()
export class Globals {
  loginResponse: ILoginResponse;
  loginAlert: string = "";
  hasAlert: boolean = false;
  session: ISession;
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