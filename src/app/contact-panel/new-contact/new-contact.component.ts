import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatButton, MatFormFieldModule, MatSelect } from '@angular/material';
import {NgForm, NgModel, FormGroup} from '@angular/forms';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';

@Component({

  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent {
  contacts = [];


  constructor(public thisDialogRef: MatDialogRef<NewContactComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
    this.contacts = JSON.parse(localStorage['contacts']);
  }

  onSubmit(name: string, phone: number, email: string, group: string) {
    this.contacts.push({_id: 20, name: name, picture: 'assets/profiles/default.png', email: email, phone: phone, isFavorite: true, company: 'google'});
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }


}
