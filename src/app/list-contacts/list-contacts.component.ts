import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../shared/contact';
import { Types } from '../shared/mock';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  @Input() contactsList: Contact[];

  selectedContact: Contact;

  types: string[] = Types;

  constructor() { }

  ngOnInit(): void {
  }

  showContactInfo(contact: Contact): void{
    this.selectedContact = contact
  }

  editContact(): void {
    let editedContacts = this.contactsList;
    editedContacts = this.contactsList.map(contact => {
      if(contact.id === this.selectedContact.id) {
        contact.name = this.selectedContact.name;
        contact.email = this.selectedContact.email;
        contact.phone = this.selectedContact.phone;
        contact.type = this.selectedContact.type;
      }
      return contact;
    });
    this.contactsList = editedContacts;
    this.closeInfo();
  }

  closeInfo(): void {
    this.selectedContact = null;
  }

  deleteContact(): void{
    this.contactsList = this.contactsList.filter(x => x != this.selectedContact);
    this.closeInfo();
  }
}
