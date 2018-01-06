import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatButton, MatFormFieldModule, MatSelect } from '@angular/material';
import {NgForm, NgModel, FormGroup} from '@angular/forms';

@Component({

  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent {
  contacts = [];



  constructor(public thisDialogRef: MatDialogRef<NewContactComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
    this.contacts = JSON.parse(localStorage['contacts']);
  }

  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

  addNewContact() {
    //this.contacts.push({_id: 20, name: 'Amenadiel', picture: 'assets/profiles/people-q-c-64-64-7.jpg', email: 'none', phone: 'none', isFavorite: true, company: 'google'});
    //localStorage.setItem('contacts', JSON.stringify(this.contacts));
    //console.log(form.value);
  }

  onSubmit(name: string, phone: number, email: string, group: string) {
    this.contacts.push({_id: 20, name: name, picture: 'assets/profiles/people-q-c-64-64-7.jpg', email: email, phone: phone, isFavorite: true, company: 'google'});
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

}
