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
  contactCount: number;
  private url = 'assets/generated.json';


  constructor(private http: Http) {

    /** Getting the JSON and sorting it alphabetically with the name keys **/

    http.get(this.url).subscribe(response => {
      this.contacts = response.json();
      this.contacts.sort(function(a, b) {
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
      console.log(this.uniqueArray);

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
