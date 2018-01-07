import { Component } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('visibilityChanged', [
      state('shown' , style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class AppComponent {
  clickedContact;
  showEdit :boolean;

  // editOnClick() {
  //   this.showEdit = !this.showEdit;
  //   console.log('clicked' + ' ' + this.showEdit);
  // }

}
