import {Component, OnInit, Input, Output, EventEmitter, NgModule} from '@angular/core';
import {animate, animateChild, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';
import {ContactListComponent} from '../contact-list.component';
import {SearchFilterPipe} from '../../search-filter.pipe';

@NgModule({
  imports: [SearchFilterPipe],
  exports: [],
  declarations: [ContactListItemComponent],
  providers: [],
})
@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        animate('1s ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
          style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
          style({opacity: 1, transform: 'translateY(0)', offset: 1}),
        ]))
      ])
    ])
  ]
})
export class ContactListItemComponent implements OnInit {
  @Input() contact;
  @Output() contactSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.contactSelected.emit();
  }

}
