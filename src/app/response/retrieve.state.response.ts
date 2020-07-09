import { IResponse } from './response';
import { ISession } from '../session/session';

export interface IRetrieveStateResponse extends IResponse{
    session : ISession
    
}