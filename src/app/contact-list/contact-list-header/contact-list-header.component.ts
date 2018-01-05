import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-list-header',
  templateUrl: './contact-list-header.component.html',
  styleUrls: ['./contact-list-header.component.scss']
})
export class ContactListHeaderComponent implements OnInit {
  @Input() letter;

  constructor() { }

  ngOnInit() {
  }

}
