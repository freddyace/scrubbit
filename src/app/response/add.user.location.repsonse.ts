import { IResponse } from './response';
import { ISession } from '../session/session';

export interface IAddUserLocationResponse extends IResponse{
    session : ISession

}