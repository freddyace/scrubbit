import { IService } from '../entity/service';
import { IVehicle } from '../dashboard/vehicle/vehicle';
import { ITransaction } from '../entity/transaction';
import { IUserLocation } from '../entity/user.location';

/**
 * The only different between these 3 fields
 * on this interface vs the same 3 on the session
 * interface is that the session will contain objects
 * not yet persisted, while this one is only concerned
 * with persisted objects fetched from the DB. 
 */
export interface IBaseDto{
    userLocationList: IUserLocation[], 
    vehicleList: IVehicle[],
    transactionList: ITransaction[],
}