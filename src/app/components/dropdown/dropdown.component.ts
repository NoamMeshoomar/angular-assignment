import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ICodeValue } from '../../types/process.types';

@Component({
  selector: 'app-dropdown',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  @Input() label = '';
  @Input() control!: FormControl;
  @Input() items: Array<ICodeValue> = [];
}
