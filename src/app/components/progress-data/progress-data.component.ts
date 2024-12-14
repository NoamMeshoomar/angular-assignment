import { Component } from '@angular/core';
import { InsuredInformationComponent } from '../insured-information/insured-information.component';
import { DetailsFormComponent } from '../details-form/details-form.component';

@Component({
  selector: 'app-progress-data',
  imports: [InsuredInformationComponent, DetailsFormComponent],
  templateUrl: './progress-data.component.html',
  styleUrl: './progress-data.component.css'
})
export class ProgressDataComponent {

}
