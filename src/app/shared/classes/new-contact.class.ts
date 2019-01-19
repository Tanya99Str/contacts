import { IPhone } from '../interfaces';

export class NewContact implements IPhone{
  constructor(
    public id: number = 0,
    public contact_name: string,
    public phone_number: string,
    public email: string,
    public details: string,
    public isDetails:boolean=false,
  ){ }
}
