import { Component, inject, Input } from '@angular/core';
import { IContact } from '../../types/process.types';
import { ProcessService } from '../../services/process.service';
import { PhoneFormatPipe } from '../../phone-format.pipe';

@Component({
  selector: 'app-contact-item',
  imports: [PhoneFormatPipe],
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.css',
  host: { style: 'display: contents;' }
})
export class ContactItemComponent {
  processService = inject(ProcessService);

  @Input("contact") contact!: IContact;

  onChangeToggleFavorite(event: any) {
    this.processService.toggleFavorite(this.contact.id, event.target.checked);
  }
}
