import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import {LocalStorage, LocalStorageService, SessionStorage} from 'ngx-webstorage';


@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  @LocalStorage('contacts') contacts = this.localSt.retrieve('contacts');
  @Input() contact;
  @Input() showEdit;
  @Output() clickOnEdit = new EventEmitter<void>();
  @Input() thisSelectedContact;
  newItem;

  @ViewChild('singleId') input: ElementRef;

  constructor(public snackBar: MatSnackBar, private localSt: LocalStorageService) {
    this.contacts = this.localSt.retrieve('contacts');
  }

  ngOnInit() {
  }

  closeSnackBar() {
    return this.snackBar.dismiss();
  }

  // Updating the contact with the updated values from the input
  onContactUpdate(id: string, name: string, phone: string, email: string, group: string, picture: string) {

    this.newItem = {
      '_id': id,
      'name': name,
      'phone': phone,
      'email': email,
      'company': group,
      'picture': picture
    };

    let index = this.contacts.findIndex(el => el._id === this.input.nativeElement.value);

    this.contacts = this.localSt.retrieve('contacts');

    this.contacts[index] = this.newItem;
    this.localSt.store('contacts', this.contacts);

    this.snackBar.open(`${name} is edited!`, 'Got it!');
    setTimeout(() => { this.closeSnackBar(); }, 5000);

  }
}
