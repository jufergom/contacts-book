import { Component, OnInit } from '@angular/core';
import { Types } from '../shared/mock';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  isVisible: boolean = false; 
  messageAdd: string = "Añadir Contacto";
  messageCancel: string = "Cancelar";
  message: string = this.messageAdd;

  buttonClassClosed: string = "btn btn-secondary mb-2 mt-2";
  buttonClassOpen: string = "btn btn-danger mb-2 mt-2";
  buttonClass: string = this.buttonClassClosed;

  types: string [] = Types;

  constructor() { }

  ngOnInit(): void {
  }

  showForm():void {
    this.isVisible = !this.isVisible;
    this.message = this.message == this.messageAdd ? this.messageCancel : this.messageAdd;
    this.buttonClass = this.buttonClass == this.buttonClassClosed ? this.buttonClassOpen : this.buttonClassClosed;
  }
}
