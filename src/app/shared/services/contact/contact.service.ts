import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPhone } from '../../interfaces';
import { Observable } from 'rxjs';
// import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url= 'http://localhost:3000/contacts';
   }

   public getContact(): Observable<Array<IPhone>>{
     return this.http.get<Array<IPhone>>(this.url);
   }

   public addContact(contact :IPhone): Observable<Array<IPhone>>{
     console.log('addContact');
     return this.http.post<Array<IPhone>>(this.url, contact)
   }

   public delContact(id: number):Observable<Array<IPhone>>{
     return this.http.delete<Array<IPhone>>(`${this.url}/${id}`);
   }
  

  public getContactList(): Observable<Array<IPhone>> {
    return new Observable((observer) => {
      observer.next(itemPhone);
      observer.complete();  
    });
  }
}

const itemPhone: Array<IPhone>=[
  <IPhone>{
    contact_name: 'Jeffery Graham',
    phone_number: '(115)-788-7707',
    email: 'jeffery.graham12@example.com',
    details: 'Address: 1600 N Dapple Gray Rdpark St'
  },
  <IPhone>{
    contact_name: 'Brooklyn Porter',
    phone_number: '(626)-307-7266',
    email: 'brooklyn.porter53@example.com',
    details: 'Address: 5576 Partridge Ave'
  },
  <IPhone>{
    contact_name: 'Lori Murray',
    phone_number: '(705)-238-9927',
    email: 'lori.murray47@example.com',
    details: 'Address: 5091 Rolling Green Rd'
  },
  <IPhone>{
    contact_name: 'Ben Ray',
    phone_number: '(375)-726-8334',
    email: 'ben.ray55@example.com',
    details: 'Address: 6897 Samaritan Dr'
  },
  <IPhone>{
    contact_name: 'Kathy Lawrence',
    phone_number: '(894)-972-3881',
    email: 'kathy.lawrence97@example.com',
    details: 'Address: 6009 Washington Rd'
  },
  <IPhone>{
    contact_name: 'Bradley Webb',
    phone_number: '(739)-623-1683',
    email: 'bradley.webb18@example.com',
    details: 'Address: 5465 Shady Ln Dr'
  },
  <IPhone>{
    contact_name: 'Kristin Dunn',
    phone_number: '(654)-857-1507',
    email: 'kristin.dunn14@example.com',
    details: 'Address: 5935 Ash Dr'
  },
  <IPhone>{
    contact_name: 'Ricardo Lynch',
    phone_number: '(916)-972-6318',
    email: 'ricardo.lynch76@example.com',
    details: 'Address: 5881 Saddle Dr'
  },
  <IPhone>{
    contact_name: 'Ben Mendoza',
    phone_number: '(161)-373-8505',
    email: 'ben.mendoza80@example.com',
    details: 'Address: 3102 Woodlane Dr'
  },
  <IPhone>{
    contact_name: 'Stacy Palmer',
    phone_number: '(441)-310-9054',
    email: 'stacy.palmer53@example.com',
    details: 'Address: 8381 Rolling Green Rd'
  },
]