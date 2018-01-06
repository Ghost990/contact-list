/**
 * The contact-list.component.ts file is responsible for handling the JSON request from the
 * folder, subscibing for it and use use an array where we can store all of the objects.
 * After the objects are in place we can use in the template for listing all the contacts
 * from the API, in this case from the /assets/generated.json file.
 **/

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { ManageDataService } from '../manage-data.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: any[] = [];
  firstLetter: string[] = [];
  uniqueArray: string[] = [];
  contactCount: number;
  @Output() selectedContact = new EventEmitter<void>();


  constructor(private http: Http, private _manageDataService: ManageDataService) {

    this.contacts = this._manageDataService.contacts;
    this.firstLetter = this._manageDataService.firstLetter;
    this.uniqueArray = this._manageDataService.uniqueArray;
    this.contactCount = this._manageDataService.contactCount;
    console.log(this.contacts);

    if (localStorage.getItem('contacts') === null) {
      this._manageDataService.getJsonContacts(http);
    } else {
      this._manageDataService.getLocalContacts();
    }


  }

  ngOnInit() {

  }

  onContactSelected(contact) {
    this.selectedContact.emit(contact);
  }



}
