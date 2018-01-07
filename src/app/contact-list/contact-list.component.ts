/**
 * The contact-list.component.ts file is responsible for handling the JSON request from the
 * folder, subscibing for it and use use an array where we can store all of the objects.
 * After the objects are in place we can use in the template for listing all the contacts
 * from the API, in this case from the /assets/generated.json file.
 **/

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';

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
  selected: any;
  @Output() selectedContact = new EventEmitter<void>();
  private url = 'assets/generated.json';


  constructor(private http: Http, private localSt: LocalStorageService) {

    if (localStorage.getItem('contacts') === null) {
      this.getJsonContacts(http);
    } else {
      this.getLocalContacts();
    }

  }

  ngOnInit() {
    this.localSt.observe('key')
      .subscribe((value) => console.log('new value', value));
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
    //this.contacts.push({_id: 20, name: 'Xena', picture: 'assets/profiles/people-q-c-64-64-7.jpg', email: 'none', phone: 'none', isFavorite: true, company: 'google'})
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
    //console.log(this.contacts);



    for (let contact of this.contacts) {
      this.firstLetter.push(contact.name.charAt(0));
    }


    /** Removing duplicates from the array for every same starting letter
     *  will be grouped under a single letter.
     **/

    this.removeDuplicates(this.firstLetter);

    this.contactCount = this.contacts.length;
  }

  onContactSelected(contact) {
    this.selectedContact.emit(contact);
  }

  pushC() {
    this.contacts.push({_id: 20, name: 'Alex', picture: 'assets/profiles/people-q-c-64-64-7.jpg', email: 'n', phone: 'n', isFavorite: false, company: 'google'});
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  select(item) {
    this.selected = item;
  }

  isActive(item) {
    return this.selected === item;
  }


}
