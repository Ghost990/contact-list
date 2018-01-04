import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: any[];
  firstLetter: string[] = [];
  uniqueArray: string[] = [];
  contactCount: number;
  private url = 'assets/generated.json';


  constructor(private http: Http) {
    http.get(this.url).subscribe(response => {
      this.contacts = response.json();
      this.contacts.sort(function(a, b) {
        return a.name > b.name;
      });
      this.contacts.sort();

      for (let contact of this.contacts) {
        this.firstLetter.push(contact.name.charAt(0));
      }

      this.removeDuplicates(this.firstLetter);
      console.log(this.uniqueArray);

      this.contactCount = this.contacts.length;

    });
  }

  ngOnInit() {

  }

  removeDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (this.uniqueArray.indexOf(arr[i]) == -1) {
        this.uniqueArray.push(arr[i]);
      }
    }
    return this.uniqueArray;
  }


}
