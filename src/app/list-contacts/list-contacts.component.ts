import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../shared/contact';
import { Types } from '../shared/mock';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  @Input() contactsList: Contact[];

  @Output() deletedContactEvent = new EventEmitter<Contact>();

  selectedContact: Contact;

  types: string[] = Types;

  constructor() { }

  ngOnInit(): void {
  }

  showContactInfo(contact: Contact): void{
    this.selectedContact = contact
  }

  closeInfo(): void {
    this.selectedContact = null;
  }

  deleteContact(): void{
    this.deletedContactEvent.emit(this.selectedContact);
    this.closeInfo();
  }
}
