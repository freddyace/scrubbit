import { IResponse } from './response';
import { ISession } from '../session/session';

export interface ILoginResponse extends IResponse{
    session : ISession
}