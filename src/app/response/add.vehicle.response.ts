import { IResponse } from './response';
import { ISession } from '../session/session';

export interface IAddVehicleResponse extends IResponse{
    session : ISession
}