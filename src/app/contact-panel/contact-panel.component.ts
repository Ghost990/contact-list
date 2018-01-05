import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-panel',
  templateUrl: './contact-panel.component.html',
  styleUrls: ['./contact-panel.component.scss']
})
export class ContactPanelComponent implements OnInit {
  @Input() contact;

  constructor() { }

  ngOnInit() {
  }

}
