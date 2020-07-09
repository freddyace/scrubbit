import { IResponse } from './response';
import { ISession } from '../session/session';

export interface ILoginResponse extends IResponse{
    session : ISession

    // constructor(jsonData?: string){
    //     var obj = JSON.parse(jsonData);
    //     this.session = new ISession(obj.session);
    //     this.message = obj.message;
    //     this.resultCode = obj.resultCode;
    // }


}