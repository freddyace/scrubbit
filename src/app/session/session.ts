import { IVehicle } from '../dashboard/vehicle/vehicle';
import { IService } from '../entity/service';
import { ITransaction } from '../entity/transaction';
import { ICart } from '../entity/cart';
import { IBaseDto } from '../dto/base.dto';
import { IUser } from '../login/service/user';

export interface ISession {
    sessionId: string,
    lastLogin: Date,
    serviceList: IService[],
    vehicleList: IVehicle[],
    transactionList: ITransaction[],
    cart: ICart,
    expirationDateTime: Date,
    user: IUser,
    token: string,
    baseDto:IBaseDto

    // constructor(jsonData: ISession){
    //     console.log("convering the following json data:");
    //     console.log(jsonData);
    //     this.sessionId = jsonData.sessionId;
    //     this.lastLogin = jsonData.lastLogin;
    //     this.serviceList = jsonData.serviceList;
    //     this.vehicleList = jsonData.vehicleList;
    //     this.transactionList = jsonData.transactionList;
    //     this.cart = jsonData.cart;
    //     this.expirationDateTime = jsonData.expirationDateTime;
    //     this.dto = jsonData.dto;
    // }
}