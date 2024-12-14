import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactItemComponent } from '../contact-item/contact-item.component';
import { AddContactItemComponent } from '../add-contact-item/add-contact-item.component';
import { MockdataService } from '../../services/mockdata.service';
import { ProcessService } from '../../services/process.service';

@Component({
  selector: 'app-contacts-list',
  imports: [ContactItemComponent, AddContactItemComponent, ReactiveFormsModule],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.css'
})
export class ContactsListComponent {
  processService = inject(ProcessService);
  submittedBy = inject(MockdataService).getSubmittedBy;

  showAddContactForm = false;

  form = new FormGroup({
    deliveryFlag: new FormControl('', [(control: AbstractControl) => {
      if(!control.value) return null;
      if(control.value && this.processService.getContactPersons.find(contact => contact.deliveryFlag)) {
        return null;
      }
      return { error: "חייב להיות לפחות איש קשר מעודף אחד" };
    }]),
    name: new FormControl('', [Validators.required, Validators.pattern("^[א-ת]+$")]),
    type: new FormControl('', Validators.required),
    address: new FormControl(''),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{10}$")]),
    email: new FormControl('', Validators.email),
  });

  onSubmit() {
    this.form.get('deliveryFlag')?.updateValueAndValidity();

    if(this.form.valid) {
      this.processService.addContact({
        ...this.form.value, 
        phoneNumber: +(this.form.value.phoneNumber || ''),
        type: this.submittedBy.find((item) => item.code === +this.form.value.type!)
      });
      this.form.reset();
      this.showAddContactForm = false;
    } else {
      alert("אחד או יותר מהשדות לא תקין.");
    }
  }
}