import { Component, inject } from '@angular/core';
import { ProcessService } from '../../services/process.service';

@Component({
  selector: 'app-contacts-actions',
  imports: [],
  templateUrl: './contacts-actions.component.html',
  styleUrl: './contacts-actions.component.css'
})
export class ContactsActionsComponent {
  contacts = inject(ProcessService);

  onClickAddInsuredToContacts() {
    this.contacts.addContact(null);
  }

  onClickFullReset() {
    this.contacts.removeAllContacts();
  }

  onClickRemoveUnfavorites() {
    this.contacts.removeUnfavorites();
  }
}