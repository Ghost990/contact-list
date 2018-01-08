import { Component, OnInit, Inject, EventEmitter, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatButton, MatFormFieldModule, MatSelect } from '@angular/material';
import { ContactListComponent } from '../../contact-list/contact-list.component';
import { MatSnackBar } from '@angular/material';

@Component({

  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent {
  contacts = [];
  @ViewChild('contactListComponent') contactListComponent: ContactListComponent;


  constructor(public thisDialogRef: MatDialogRef<NewContactComponent>, @Inject(MAT_DIALOG_DATA) public data: string, public snackBar: MatSnackBar) {
    this.contacts = JSON.parse(localStorage['contacts']);
  }

  closeSnackBar() {
    return this.snackBar.dismiss();
  }

  onSubmit(name: string, phone: number, email: string, group: string) {
    this.contacts.push({_id: 20, name: name, picture: 'assets/profiles/default.png', email: email, phone: phone, isFavorite: true, company: 'google'});
    localStorage.setItem('contacts', JSON.stringify(this.contacts));


    this.snackBar.open(`New Contact for ${name} is created!`, 'Got it!');
    setTimeout(() => { this.closeSnackBar() }, 5000)

    this.thisDialogRef.close();

  }


}
