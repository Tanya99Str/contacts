import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IPhone } from '../../shared/interfaces';
import { NewContact } from '../../shared/classes';
import { ContactService } from '../../shared/services';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  public phone: Array<IPhone>= [];
  public search: string;
  public id: number;
  public contact_name: string;
  public phone_number: string;
  public email: string;
  public details: string;

  constructor(
    private contactService: ContactService
  ) {
    this.getContact();
   }

  ngOnInit() {
  }

  private getContact():void {
    this.contactService.getContact().subscribe(
      data => {
        console.log(data);
        this.phone = data;
      },
      err => {
        console.error(err);
      }
    )
  }

  public isSubmit(newContact:IPhone):void{
    newContact.id = this.phone.slice(-1)[0].id + 1;
    this.contactService.addContact(newContact).subscribe(() => {
      this.getContact();
    })
  }

  public isToggleDetails(item:IPhone): void{
    item.isDetails=!item.isDetails;
  }

  public isDeleteContact(item:IPhone): void{
    this.contactService.delContact(item.id).subscribe(() => {
      this.getContact();
    });
  }

}
