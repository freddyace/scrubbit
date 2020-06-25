import { Injectable } from '@angular/core';
import { ISession } from '../session/session';

@Injectable()
export class Globals {
  loginAlert: string = "";
  hasAlert: boolean = false;
  session: ISession;
  loading: boolean = false;
  
  public setLoading(): void{
    this.loading = true;
  }
  public setLoadingDone(): void {
    this.loading = false;
  }
}