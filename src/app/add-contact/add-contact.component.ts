import { Component, OnInit, Input } from '@angular/core';
import { Types } from '../shared/mock';
import { Contact } from '../shared/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  @Input() contactsList: Contact[]; // esto cambiarlo a un output y mandarselo al list-contact

  isVisible: boolean = false; 
  messageAdd: string = "Añadir Contacto";
  messageCancel: string = "Cancelar";
  message: string = this.messageAdd;

  buttonClassClosed: string = "btn btn-secondary mb-2 mt-2";
  buttonClassOpen: string = "btn btn-danger mb-2 mt-2";
  buttonClass: string = this.buttonClassClosed;

  types: string [] = Types;

  inputContact: Contact;

  constructor() {
    this.inputContact = new Contact("", "", null, "");
   }

  ngOnInit(): void {
  }

  showForm(): void {
    this.isVisible = !this.isVisible;
    this.message = this.message == this.messageAdd ? this.messageCancel : this.messageAdd;
    if(!this.isVisible){ this.inputContact = new Contact("", "", null, ""); }
    this.buttonClass = this.buttonClass == this.buttonClassClosed ? this.buttonClassOpen : this.buttonClassClosed;
  }

  onSubmit(contact : Contact): void {
    this.contactsList.push(contact);
    this.showForm();
  }
}
