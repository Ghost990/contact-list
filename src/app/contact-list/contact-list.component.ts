/**
 * The contact-list.component.ts file is responsible for handling the JSON request from the
 * folder, subscibing for it and use use an array where we can store all of the objects.
 * After the objects are in place we can use in the template for listing all the contacts
 * from the API, in this case from the /assets/generated.json file.
 **/

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import { trigger, style, transition, animate, keyframes, query, stagger, animateChild } from '@angular/animations';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* -> *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),
        query(':enter', stagger('100ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]), {optional: true})
      ])
    ])
  ]

})
export class ContactListComponent implements OnInit {
  contacts: any[];
  firstLetter: string[] = [];
  uniqueArray: string[] = [];
  contactCount: number;
  selected: any;
  stateForm: FormGroup;
  @Output() selectedContact = new EventEmitter<void>();
  private url = 'assets/generated.json';


  constructor(private http: Http, private fb: FormBuilder, private localSt: LocalStorageService) {

    if (this.localSt.retrieve('contacts') === null) {
      this.getJsonContacts(http);
    } else {
      this.getLocalContacts();
    }


    this.stateForm = new FormGroup({
      search: new FormControl()
    });

  }

  ngOnInit() {
    this.localSt.observe('contact')
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

      this.localSt.store('contacts', this.contacts);
      //localStorage.setItem('contacts', JSONContacts);



    });
  }

  getLocalContacts() {
    /** Iterating through the contacts array and saving the first letter in another one **/

    //this.contacts = JSON.parse(this.localSt.retrieve('contacts'));
    this.contacts = this.localSt.retrieve('contacts');
    //this.contacts.push({_id: 20, name: 'Xena', picture: 'assets/profiles/people-q-c-64-64-7.jpg', email: 'none', phone: 'none', isFavorite: true, company: 'google'})
    //localStorage.setItem('contacts', JSON.stringify(this.contacts));
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

  getSearchValue() {
    return this.stateForm.value.search;
  }


}
