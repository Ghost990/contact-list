import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ManageDataService {
  public contacts: any[];
  public firstLetter: string[] = [];
  public uniqueArray: string[] = [];
  public contactCount: number;
  private url = 'assets/generated.json';

  constructor(private http: Http) {
    this.getJsonContacts(http);
    this.getLocalContacts();
  }

  removeDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (this.uniqueArray.indexOf(arr[i]) === -1) {
        this.uniqueArray.push(arr[i]);
      }
    }
    return this.uniqueArray;
  }

  getJsonContacts(http: Http) {
    http.get(this.url).subscribe(response => {
      this.contacts = response.json().sort(function(a, b) {
        return a.name > b.name;
      });


      /** Iterating through the contacts array and saving the first letter in another one **/

      for (let contact of this.contacts) {
        this.firstLetter.push(contact.name.charAt(0));
      }

      /** Removing duplicates from the array for every same starting letter
       *  will be grouped under a single letter.
       **/

      this.removeDuplicates(this.firstLetter);

      this.contactCount = this.contacts.length;

      let JSONContacts = JSON.stringify(this.contacts);

      localStorage.setItem('contacts', JSONContacts);

    });
  }

  getLocalContacts() {
    /** Iterating through the contacts array and saving the first letter in another one **/

    this.contacts = JSON.parse(localStorage['contacts']);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));



    for (let contact of this.contacts) {
      this.firstLetter.push(contact.name.charAt(0));
    }


    /** Removing duplicates from the array for every same starting letter
     *  will be grouped under a single letter.
     **/

    this.removeDuplicates(this.firstLetter);

    this.contactCount = this.contacts.length;
  }

}
