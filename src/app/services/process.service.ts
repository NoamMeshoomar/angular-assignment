import { Injectable } from '@angular/core';

import { IProcess } from '../types/process.types';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {
  private process: IProcess = {
    superClaim: {
      superClaimNum: 500038313,
      superClaimStatus: {
        code: 1,
        value: "מבוטח"
      }
    },
    insured: {
      address: {
        cityName: "רעננה",
        streetName: "אחוזה"
      },
      identityType: 1,
      age: 35,
      lastName: "ג'יין",
      identity: 27854122145,
      firstName: "מריה"
    },
    contactPersons: [{
      id: 1,
      deliveryFlag: false,
      type: {
        code: 1,
        value: "מבוטח"
      },
      name: "ניקיטה ג'יין",
      phoneNumber: 525816206,
      email: "nikita_jain@amat.com",
      address: "רחובות אופנהיימר"
    }]
  }

  get getSuperClaim() {
    return this.process.superClaim;
  }

  get getInsured() {
    return this.process.insured;
  }

  get getContactPersons() {
    return this.process.contactPersons;
  }

  addContact(contact: any) {
    const currentContacts = this.getContactPersons;
    if(!contact) {
      const { firstName, lastName, identityType, address } = this.getInsured;
      const newInsured = {
        id: currentContacts.length + 1,
        deliveryFlag: false,
        type: { code: identityType, value: "מבוטח" },
        name: `${firstName} ${lastName}`,
        phoneNumber: 525452203,
        email: "maria_jain@amat.com",
        address: `${address.cityName} ${address.streetName}`
      };

      currentContacts.push(newInsured);
    } else {
      contact.id = currentContacts.length + 1;
      currentContacts.push(contact);
    }
  }

  removeAllContacts() {
    this.getContactPersons.length = 0;
  }

  removeUnfavorites() {
    const favoriteContacts = this.getContactPersons.filter((contact) => contact.deliveryFlag);
    if(!favoriteContacts.length) this.removeAllContacts();
    else {
      this.getContactPersons.length = 0;
      this.getContactPersons.push(...favoriteContacts);
    }
  }

  toggleFavorite(contactId: number, isFavorite: boolean) {
    const contact = this.getContactPersons.find((contact) => contact.id === contactId);
    if(contact) contact.deliveryFlag = isFavorite;
  }
}