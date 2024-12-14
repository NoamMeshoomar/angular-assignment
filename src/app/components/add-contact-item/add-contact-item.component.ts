import { Component, inject, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { MockdataService } from '../../services/mockdata.service';

@Component({
  selector: 'app-add-contact-item',
  imports: [DropdownComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './add-contact-item.component.html',
  styleUrl: './add-contact-item.component.css',
  host: { style: 'display: contents;' }
})
export class AddContactItemComponent {
  submittedBy = inject(MockdataService).getSubmittedBy;
  
  @Input() form!: any;
}