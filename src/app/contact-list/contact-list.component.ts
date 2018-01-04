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
  groupedNames = {};
  private url = 'http://localhost:4200/assets/generated.json';


  constructor(private http: Http) {
    http.get(this.url).subscribe(response => {
      this.contacts = response.json();
      this.contacts.sort(function(a, b) {
        return a.name > b.name;
      });
      this.contacts.sort();

      // for (let i = 0; i < this.contacts.length; i++ ) {
      //   for (let contact of this.contacts) {
      //     console.log(contact.name);
      //   }
      // }

      for (let contact of this.contacts) {
        // console.log(contact.name.charAt(0));
        this.firstLetter.push(contact.name.charAt(0));

        for (let i = 0; i < this.firstLetter.length; i++ ) {
          // if (contact.name.charAt(0) === this.firstLetter[i]) {
          //   this.groupedNames.push(contact);
          //   console.log(this.groupedNames);
          // }

        }

        // console.log(this.firstLetter);
      }

    });
  }

  ngOnInit() {

  }

  fillListByChar() {

  }


}
