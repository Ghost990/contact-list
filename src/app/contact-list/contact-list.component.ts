/**
 * The contact-list.component.ts file is responsible for handling the JSON request from the
 * folder, subscibing for it and use use an array where we can store all of the objects.
 * After the objects are in place we can use in the template for listing all the contacts
 * from the API, in this case from the /assets/generated.json file.
 **/

import {
  Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, IterableDiffers, DoCheck, OnChanges,
  AfterContentInit
} from '@angular/core';
import { Http } from '@angular/http';
import {FormBuilder, FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import {LocalStorage, LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import { trigger, style, transition, animate, keyframes, query, stagger, animateChild } from '@angular/animations';
import { SearchFilterPipe } from '../search-filter.pipe';
import { NgModule } from '@angular/core';
import {ContactListItemComponent} from './contact-list-item/contact-list-item.component';

@NgModule({
  imports: [ContactListItemComponent, SearchFilterPipe],
  exports: [],
  declarations: [ContactListComponent],
  providers: [],
})
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
  @LocalStorage('contacts') contacts: any[];
  contactCount: number;
  selected: any;
  stateForm: FormGroup;
  differ: any;
  @Output() selectedContact = new EventEmitter<void>();
  alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
  private url = 'assets/generated.json';
  queryString;

  @ViewChild('searchContact') searchInput: ElementRef;
  @ViewChild('contactListHeader') contactHeader: ElementRef;


  constructor(public differs: IterableDiffers, private http: Http, private fb: FormBuilder, private localSt: LocalStorageService) {

    this.getContacts(http);

    this.differ = differs.find([]).create(null);

    this.stateForm = new FormGroup({
      search: new FormControl()
    });

  }

  ngOnInit() {
    this.localSt.observe('contact')
      .subscribe((value) => this.contacts = this.localSt.retrieve('contacts'));
  }

  // If there are no contacts in the Localstorage then get it from generated.json file and store it.
  // Otherwise read it from Localstorage and load into view.
  getContacts(http: Http) {
    if (this.localSt.retrieve('contacts') === null) {
      http.get(this.url).subscribe(response => {
        this.contacts = response.json().sort(function(a, b) {
          return a.name > b.name;
        });

        this.contactCount = this.contacts.length;

        this.localSt.store('contacts', this.contacts);

      });
    } else {
        this.contacts = this.localSt.retrieve('contacts');
        this.contactCount = this.contacts.length;
    }
  }

  // Getting the selected Contact to load into the panel and apply styling
  onContactSelected(contact) {
    this.selectedContact.emit(contact);
  }

  select(item) {
    this.selected = item;
  }

  isActive(item) {
    return this.selected === item;
  }

}
