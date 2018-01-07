import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-panel',
  templateUrl: './contact-panel.component.html',
  styleUrls: ['./contact-panel.component.scss']
})
export class ContactPanelComponent implements OnInit {
  @Input() contact;
  @Output() selectedContact = new EventEmitter<void>();
  @Input() thisContact;

  clickedContact;
  addedFavorite: boolean;
  //@Input() showEdit;
  showEdit :boolean;

  constructor() {

  }

  ngOnInit() {
  }

  // onClick() {
  //   this.contact.isFavorite = !this.contact.isFavorite;
  //   this.addedFavorite = !this.addedFavorite;
  //   if (this.contact.isFavorite) {
  //     this.contact.isFavorite = this.addedFavorite;
  //   }
  // }

  showEditPanel() {
    //this.showEdit = !this.showEdit;
    console.log('clicked');
  }

  editOnClick(contact) {
    this.selectedContact.emit(contact);
    this.showEdit = !this.showEdit;
    //console.log('clicked' + ' ' + this.showEdit);
  }

}
