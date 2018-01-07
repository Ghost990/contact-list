import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clickedContact;
  showEdit :boolean;

  // editOnClick() {
  //   this.showEdit = !this.showEdit;
  //   console.log('clicked' + ' ' + this.showEdit);
  // }

}
