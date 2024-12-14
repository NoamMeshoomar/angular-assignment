import { Component, inject } from '@angular/core';
import { ProcessService } from '../../services/process.service';

@Component({
  selector: 'app-insured-information',
  imports: [],
  templateUrl: './insured-information.component.html',
  styleUrl: './insured-information.component.css'
})
export class InsuredInformationComponent {
  insuredInformation = inject(ProcessService).getInsured;
}
