import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './login/create-account.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddVehicleComponent } from './process/addVehicle/add-vehicle.component';
import { Globals } from './global/globals';
import { CookieService } from 'ngx-cookie-service';
import { OrderServiceComponent } from './process/order/order-service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MyOrdersComponent } from './process/my-orders.component';
import { OrderComponent } from './process/order.component';
import { MyVehiclesComponent } from './process/myVehicles/my-vehicles.component';
import { MyLocationsComponent } from './process/myLocations/my-locations.component';
import { AddLocationComponent } from './process/myLocations/addLocation/add-location.component';
import { SuccessComponent } from './process/success.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    DashboardComponent,
    AddVehicleComponent,
    OrderServiceComponent,
    MyOrdersComponent,
    MyVehiclesComponent,
    OrderComponent,
    MyLocationsComponent,
    AddLocationComponent,
    SuccessComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [ Globals, CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
