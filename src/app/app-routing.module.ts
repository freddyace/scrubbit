import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './login/create-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddVehicleComponent } from './process/addVehicle/add-vehicle.component';
import { OrderServiceComponent } from './process/order/order-service.component';
import { MyOrdersComponent } from './process/my-orders.component';
import { OrderComponent } from './process/order.component';
import { MyVehiclesComponent } from './process/myVehicles/my-vehicles.component';
import { MyLocationsComponent } from './process/myLocations/my-locations.component';
import { SuccessComponent } from './process/success.component';
import { AddLocationComponent } from './process/myLocations/addLocation/add-location.component';
import { AddLocation2Component } from './process/myLocations/addLocation/add-location2.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'createAccount', component:CreateAccountComponent},
  { path: 'login', component:LoginComponent},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'addvehicle', component:AddVehicleComponent},
  { path: 'orderservice', component:OrderServiceComponent},
  { path: 'myOrders', component:MyOrdersComponent},
  { path: 'Order', component:OrderComponent},
  { path: 'myVehicles', component:MyVehiclesComponent},
  { path: 'myLocations', component:MyLocationsComponent},
  { path: 'success', component:SuccessComponent},
  { path: 'addLocation', component:AddLocationComponent},
  { path: 'addLocation2', component:AddLocation2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
