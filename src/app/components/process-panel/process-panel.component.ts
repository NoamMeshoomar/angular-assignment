import { Component, inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProcessService } from '../../services/process.service';
import { FormService } from '../../services/form.service';
import { ProgressDataComponent } from '../progress-data/progress-data.component';
import { ContactsActionsComponent } from '../contacts-actions/contacts-actions.component';
import { ContactsListComponent } from '../contacts-list/contacts-list.component';

@Component({
  selector: 'app-process-panel',
  imports: [ProgressDataComponent, ContactsActionsComponent, ContactsListComponent],
  templateUrl: './process-panel.component.html',
  styleUrl: './process-panel.component.css'
})
export class ProcessPanelComponent implements OnInit {
  superClaim = inject(ProcessService).getSuperClaim;
  formService = inject(FormService);

  form: FormGroup | null = null;

  ngOnInit(): void {
    this.formService.form$.subscribe((form) => {
      this.form = form;
    });
  }

  onClickResetForm() {
    if(this.form) {
      this.form?.reset();
      this.form.get('injuryType')?.disable();
    }
  }

  onClickSubmitForm() {
    this.form?.get('submittedBy')?.updateValueAndValidity();

    if(this.form?.valid) {
      console.log(this.form.value);
    } else {
      alert("יש לבדוק שהפרטים נכונים.");
    }
  }
}
