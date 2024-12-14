import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private formSubject = new BehaviorSubject<FormGroup | null>(null);
  form$ = this.formSubject.asObservable();

  setForm(form: FormGroup) {
    this.formSubject.next(form);
  }
}