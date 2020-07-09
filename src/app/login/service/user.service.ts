import { Injectable } from '@angular/core';
import { IUser } from './user'
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ICreateUserResponse } from 'src/app/response/create.user.response';
import { ILoginCredential } from '../credentials/login.credential';
import { ISession } from 'src/app/session/session';
import { ILoginResponse } from 'src/app/response/login.response';
import { IVehicle } from 'src/app/dashboard/vehicle/vehicle';
import { IAddVehicleResponse } from 'src/app/response/add.vehicle.response';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Globals } from 'src/app/global/globals';
import { IUserLocation } from 'src/app/entity/user.location';
import { map } from 'rxjs/operators';
import { IRetrieveStateResponse } from 'src/app/response/retrieve.state.response';
import { IAddUserLocationResponse } from 'src/app/response/add.user.location.repsonse';

@Injectable({
    providedIn: 'root'
})
export class UserService{
    private retrieveStateEndpointUrl = "http://localhost:5000/v1/retrieveState";
    private createUserEndpointUrl = "http://localhost:5000/v1/splash/createUser";
    private authenticatUserEnpointUrl = "http://localhost:5000/v1/login";
    private addVehicleEnpoint = "Http://localhost:5000/v1/scrubbit/addVehicle";
    private addUserLocationEndpoint = "http://localhost:5000/v1/scrubbit/addLocation"
    private errorMessage = "An error occured..."
    params = new URLSearchParams();

    constructor(private http: HttpClient, private router:Router, 
        private globals:Globals, private cookieService: CookieService){
 
    }

    retrieveState(token: string): Observable<IRetrieveStateResponse>{
        console.log("Retrieving state");
        return this.http.get<IRetrieveStateResponse>(this.retrieveStateEndpointUrl, {headers: {'sessionId':this.cookieService.get('sessionId')}}).pipe(
            map((data: IRetrieveStateResponse) => {
                console.log(data);
                return data;
            }),
            catchError(this.handleError2(this.router))
        );
    }
    logIn(loginCredential: ILoginCredential): Observable<ILoginResponse>{
        let headers = new HttpHeaders();
        let rout = this.router;
        let cookie = this.cookieService.get('sessionId');
        return this.http.post<ILoginResponse>(this.authenticatUserEnpointUrl,loginCredential, {headers: {'sessionId':this.cookieService.get('sessionId')}}).pipe(
            map((data: ILoginResponse) => {
                console.log(data);
                return data;
              }),
            catchError(this.handleError2(this.router))

        );

    }

    getUsers(): Observable<IUser[]>{
        let headers = new HttpHeaders();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'POST');
        return this.http.get<IUser[]>(this.createUserEndpointUrl, {headers}).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
    postUser(user: IUser): Observable<ICreateUserResponse>{
        console.log("in post user");
        let headers = new HttpHeaders();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'POST');
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'applicaton/json');

        let result =  this.http.post<ICreateUserResponse>(this.createUserEndpointUrl, user, {headers}).pipe(
            catchError(this.handleError)
            
        )
        return result;
    }
    postLocation(location: IUserLocation): Observable<IAddUserLocationResponse>{
        console.log("in post location");
        let result =  this.http.post<IAddUserLocationResponse>(this.addUserLocationEndpoint, location, {headers: {'sessionId':this.cookieService.get('sessionId')}}).pipe(
            catchError(this.handleError)
            
        )
        return result;
    }
    private handleError2(router:Router){
        //console.log("In handle error");
        //this.globals.loading=false;
        //this.globals.hasAlert=true;
        //this.globals.loginAlert= this.errorMessage;
        //console.log(this.globals.loginAlert);
        return this.handleError;
    }
    private handleError(err:HttpErrorResponse, result: any){
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occurred: ${err.error.message}`;
            console.log(errorMessage);
        }
        else{
            errorMessage = `Server returned code: ${err.status}`
            console.log(errorMessage);
        }
        return throwError(errorMessage)
    }

    postVehicle(vehicle:IVehicle, sessionId: String): Observable<IAddVehicleResponse>{
        console.log("in Add vehicle...");
        let headers = new HttpHeaders();
        //headers.append('Access-Control-Allow-Origin', '*');

        let result =  this.http.post<IAddVehicleResponse>(this.addVehicleEnpoint, vehicle, {headers: {'sessionId':this.cookieService.get('sessionId')}}).pipe(
            catchError(this.handleError)
        )
        console.log(result);
        return result;
    }
    

}