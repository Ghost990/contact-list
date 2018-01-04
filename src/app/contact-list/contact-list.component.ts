/**
 * The contact-list.component.ts file is responsible for handling the JSON request from the
 * folder, subscibing for it and use use an array where we can store all of the objects.
 * After the objects are in place we can use in the template for listing all the contacts
 * from the API, in this case from the /assets/generated.json file.
 **/

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: any[];
  firstLetter: string[] = [];
  uniqueArray: string[] = [];
  localContacts = [];
  contactCount: number;
  private url = 'assets/generated.json';


  constructor(private http: Http) {

    /** Getting the JSON and sorting it alphabetically with the name keys **/

    http.get(this.url).subscribe(response => {
      this.contacts = response.json();
      this.contacts.sort(function(a, b) {
        return a.name > b.name;
      });

      let JSONContacts = JSON.stringify(this.contacts);


      /** Iterating through the contacts array and saving the first letter in another one **/

      this.localContacts = JSON.parse(localStorage['contacts']);
      this.localContacts.push({_id: 11, name: 'Zoltan', picture: 'assets/profiles/people-q-c-64-64-7.jpg', email: 'none', phone: 'none', isFavorite: true, company: 'google'})
      console.log(this.localContacts);

      for (let contact of this.localContacts) {
        this.firstLetter.push(contact.name.charAt(0));
      }

      /** Removing duplicates from the array for every same starting letter
       *  will be grouped under a single letter.
       **/

      this.removeDuplicates(this.firstLetter);

      localStorage.setItem('contacts', JSONContacts);

      this.contactCount = this.contacts.length;

    });
  }

  ngOnInit() {

  }

  removeDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (this.uniqueArray.indexOf(arr[i]) == -1) {
        this.uniqueArray.push(arr[i]);
      }
    }
    return this.uniqueArray;
  }


}
