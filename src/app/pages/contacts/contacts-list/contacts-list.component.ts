import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPhone } from '../../../shared/interfaces';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  @Input() phoneList: Array<IPhone>;
  @Output() toggleDetails: EventEmitter<IPhone> = new EventEmitter();
  @Output() delete: EventEmitter<IPhone> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onToggleDetails(item:IPhone): void{
    this.toggleDetails.emit(item);
  }

  public onDeleteContact(item:IPhone): void{
    this.delete.emit(item);
  }

}
