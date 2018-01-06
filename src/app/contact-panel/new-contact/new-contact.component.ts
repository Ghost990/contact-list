import { Component, OnInit, Inject, EventEmitter, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatButton, MatFormFieldModule, MatSelect } from '@angular/material';
import {NgForm, NgModel, FormGroup} from '@angular/forms';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';
import { ContactListComponent } from '../../contact-list/contact-list.component';

@Component({

  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent {
  contacts = [];
  @ViewChild('contactListComponent') contactListComponent: ContactListComponent;


  constructor(public thisDialogRef: MatDialogRef<NewContactComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {

  }

  onSubmit(name: string, phone: number, email: string, group: string) {
    this.contactListComponent.contacts.push({_id: 20, name: name, picture: 'assets/profiles/default.png', email: email, phone: phone, isFavorite: true, company: 'google'});
    localStorage.setItem('contacts', JSON.stringify(this.contacts));

  }


}
