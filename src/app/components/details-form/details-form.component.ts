import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { MockdataService } from '../../services/mockdata.service';
import { ProcessService } from '../../services/process.service';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-details-form',
  imports: [ReactiveFormsModule, DropdownComponent],
  templateUrl: './details-form.component.html',
  styleUrl: './details-form.component.css'
})
export class DetailsFormComponent implements OnInit, AfterViewInit {
  inputsMockData = inject(MockdataService);
  contacts = inject(ProcessService).getContactPersons;
  formService = inject(FormService)

  form = new FormGroup({
    superClaimType: new FormControl('', Validators.required),
    claimCause: new FormControl('', Validators.required),
    injuryType: new FormControl({value: '', disabled: true}),
    submittedBy: new FormControl('', [Validators.required, (control: AbstractControl) => {
      if(this.contacts.find((contact) => contact.type.code === +control.value)) return null;
      return { error: "חייב להיות איש קשר מאותו הסוג" };
    }]),
    submittionMethod: new FormControl(''),
    eventDate: new FormControl(0, Validators.required),
  });

  ngOnInit(): void {
    this.form.get("claimCause")?.valueChanges.subscribe(() => {
      const injuryType = this.form.get("injuryType");
      injuryType?.enable();
      injuryType?.addValidators(Validators.required);
    });

    this.form.get("submittedBy")?.valueChanges.subscribe((value: any) => {
      if(!value) return;
      if(!this.contacts.find((contact) => contact.type.code === +value)) {
        alert("חייב להיות איש קשר מאותו הסוג");
      }
    });
  }

  ngAfterViewInit(): void {
    this.formService.setForm(this.form);
  }
}