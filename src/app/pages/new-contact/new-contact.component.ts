import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { IPhone } from '../../shared/interfaces';
import { NewContact } from '../../shared/classes';
import { ContactService } from '../../shared/services';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  public phone: Array<IPhone>= [];
  public id: number;
  public contact_name: string;
  public phone_number: string;
  public email: string;
  public details: string;



  // @Output() isSubmit: EventEmitter<IPhone> = new EventEmitter();

  constructor(
    private contactService: ContactService
  ) { 

  }

  ngOnInit() {
    this.getContact();
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
  public onSubmit():void{
    let newContact=new NewContact(this.id, this.contact_name, this.phone_number, this.email, this.details);
    newContact.id = this.phone.slice(-1)[0].id + 1;
    this.contactService.addContact(newContact)
      .subscribe(() => {
   this.contact_name='';
   this.phone_number='';
   this.email='';
   this.details='';
    })
    console.log('addNewContact');
  }

}
