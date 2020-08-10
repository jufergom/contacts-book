import { Component } from '@angular/core';
import { Contact } from './shared/contact';
import { Mock } from './shared/mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  contactsList: Contact[] = [];
  Title: string = "Contact List";

  ngOnInit(): void {
    this.contactsList = Mock;
  }

}
