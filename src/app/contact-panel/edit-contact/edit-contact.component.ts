import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  contacts = [];
  @Input() contact;
  @Input() showEdit;
  @Output() clickOnEdit = new EventEmitter<void>();
  @Input() thisSelectedContact;
  findIndexOfKey;
  single;
  newItem;
  thisItemIndex;

  @ViewChild('singleId') input: ElementRef;

  constructor() {

    this.contacts = JSON.parse(localStorage['contacts']);

    // this.contacts = JSON.parse(localStorage['contacts']);
    // console.log(this.contacts);
    //
    // this.single = this.contacts.find(item => item._id === '5a4d1dac1fa45abdcd277f49');
    // console.log(this.single);

    // for (let i = 0; i < localStorage.length; i++) {
    //   let key = JSON.parse(localStorage['contacts'])[i]._id;
    //   console.log(key);
    // }



  }

  ngOnInit() {

  }

  ngAfterViewInit() {

    //let thisItemIndex = this.contacts.findIndex(el => el._id === this.input.nativeElement.value);


    //console.log(this.input.nativeElement.value);
  }

  onClickOnEdit() {
    this.clickOnEdit.emit();
  }




  findIndexToUpdate(newItem) {
    return newItem.id === this;
  }

  showUpdatedItems(newItem) {
    let updateItem = this.contacts.find(this.findIndexToUpdate, newItem.id);
    let index = this.contacts.indexOf(updateItem);

    console.log(JSON.stringify(updateItem));
    console.log(JSON.stringify(index));
    console.log(JSON.stringify(this.contacts));

    this.contacts[index] = newItem;
  }


  onContactUpdate(id: string, name: string, phone: string, email: string) {

    this.newItem = {
      '_id': id,
      'name': name,
      'phone': phone,
      'email': email

    };

    let index = this.contacts.findIndex(el => el._id === this.input.nativeElement.value);

    //this.contacts = JSON.parse(localStorage['contacts']);
    //this.showUpdatedItems(this.newItem);

    this.contacts[index] = this.newItem;

    //this.contacts.push(this.newItem);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }


}
