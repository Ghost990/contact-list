import { Component, OnInit, Inject, EventEmitter, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatButton, MatFormFieldModule, MatSelect } from '@angular/material';
import { ContactListComponent } from '../../contact-list/contact-list.component';
import { MatSnackBar } from '@angular/material';
import { LocalStorageService } from 'ngx-webstorage';
import { LocalStorage } from 'ngx-webstorage';

@Component({

  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent {
  newItem;
  @LocalStorage('contacts') contacts = this.localSt.retrieve('contacts');
  @ViewChild('contactListComponent') contactListComponent: ContactListComponent;


  constructor(public thisDialogRef: MatDialogRef<NewContactComponent>, @Inject(MAT_DIALOG_DATA) public data: string, public snackBar: MatSnackBar, private localSt: LocalStorageService) {}

  closeSnackBar() {
    return this.snackBar.dismiss();
  }


  // Creating the new contact with random ID and the values from the input
  onSubmit(name: string, phone: number, email: string, group: string) {

    const randomId = Math.floor(Math.random() * 1000000000000);

    this.newItem = {
      _id: randomId,
      name: name,
      phone: phone,
      email: email,
      company: group,
      isFavorite: false,
      picture: 'assets/profiles/default.png'
    };

    this.contacts.push(this.newItem);
    this.localSt.store('contacts', this.contacts);

    this.snackBar.open(`New Contact for ${name} is created!`, 'Got it!');
    setTimeout(() => { this.closeSnackBar(); }, 5000);

    this.thisDialogRef.close();
  }
}
