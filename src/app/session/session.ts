import { IVehicle } from '../dashboard/vehicle/vehicle';
import { IService } from '../entity/service';
import { ITransaction } from '../entity/transaction';
import { ICart } from '../entity/cart';
import { IBaseDto } from '../dto/base.dto';

export interface ISession {
    sessionId: string,
    lastLogin: Date,
    serviceList: IService[], 
    vehicleList: IVehicle[],
    transactionList: ITransaction[],
    cart: ICart
    expirationDateTime: Date
    dto:IBaseDto
}