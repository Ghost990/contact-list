/**
 * The contact-list.component.ts file is responsible for handling the JSON request from the
 * folder, subscibing for it and use use an array where we can store all of the objects.
 * After the objects are in place we can use in the template for listing all the contacts
 * from the API, in this case from the /assets/generated.json file.
 **/

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {SortPipe} from '../sort.pipe'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  pipes: [SortPipe]
})
export class ContactListComponent implements OnInit {
  contacts: any[];
  firstLetter: string[] = [];
  uniqueArray: string[] = [];
  localContacts = [];
  contactCount: number;
  letterGroup: string[] = [];
  private url = 'assets/generated.json';


  constructor(private http: Http) {

    if (localStorage.getItem('contacts') === null) {
      this.getJsonContacts(http);
      // this.contacts.sort(function(a, b) {
      //   return a.name > b.name;
      // });
    } else {
      this.getLocalContacts();
    }

  }

  ngOnInit() {
    this.uniqueArray.sort(function(a, b) {
      return a > b;
    });
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
      this.contacts = response.json();
      // this.contacts.sort(function(a, b) {
      //   return a.name > b.name;
      // });


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
    //this.contacts.push({_id: 19, name: 'Carol', picture: 'assets/profiles/people-q-c-64-64-7.jpg', email: 'none', phone: 'none', isFavorite: true, company: 'google'})
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
    //console.log(this.contacts);



    for (let contact of this.contacts) {
      this.firstLetter.push(contact.name.charAt(0));
    }


    /** Removing duplicates from the array for every same starting letter
     *  will be grouped under a single letter.
     **/

    this.removeDuplicates(this.firstLetter);
    // this.firstLetter.sort(function(a, b) {
    //   return a > b;
    // });

    this.contactCount = this.contacts.length;
  }


}
