import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-panel',
  templateUrl: './contact-panel.component.html',
  styleUrls: ['./contact-panel.component.scss']
})
export class ContactPanelComponent implements OnInit {
  @Input() contact;
  addedFavorite: boolean;

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

}
