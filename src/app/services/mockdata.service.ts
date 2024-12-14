import { Injectable } from '@angular/core';
import { ICodeValue } from '../types/process.types';

@Injectable({
  providedIn: 'root'
})
export class MockdataService {
  private submittedBy: Array<ICodeValue> = [
    { code: 1, value: 'מבוטח' },
    { code: 2, value: 'סוכן' },
    { code: 3, value: 'בן/בת זוג' }
  ];
  private superClaimType: Array<ICodeValue> = [
    { code: 1, value: "התביעה אושרה" },
    { code: 2, value: "התביעה נדחתה" },
    { code: 4, value: "טרם התקבלה החלטה" }
  ];
  private claimCause: Array<ICodeValue> = [
    { code: 1, value: "תאונה" },
    { code: 2, value: "מחלה" },
    { code: 5, value: "תאונת עבודה" },
    { code: 6, value: "אחר" }
  ];
  private injuryType: Array<ICodeValue> = [
    { code: 1, value: "אגן" },
    { code: 2, value: "גפיים" },
    { code: 5, value: "ראש" },
    { code: 6, value: "גב" },
    { code: 7, value: "לב" },
    { code: 9, value: "נפש" },
  ];
  private submittionMethod: Array<ICodeValue> = [
    { code: 1, value: 'דואר' },
    { code: 2, value: 'דיגיטל' },
    { code: 3, value: 'פקס' },
  ];
  private identityTypes: Array<ICodeValue> = [
    { code: 1, value: 'ת.ז.' },
    { code: 2, value: 'דרכון' },
    { code: 3, value: 'מבוטח' },
    { code: 4, value: 'מפעל' }
  ];

  get getSubmittedBy() { return this.submittedBy };
  get getSuperClaimType() { return this.superClaimType };
  get getClaimCause() { return this.claimCause };
  get getInjuryType() { return this.injuryType };
  get getSubmittionMethod() { return this.submittionMethod };
  get getIdentityTypes() { return this.identityTypes };
}