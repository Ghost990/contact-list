import {Subject} from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  itemValue = new Subject();

  set theItem(value) {
    this.itemValue.next(value); // this will make sure to tell every subscriber about the change.
    localStorage.setItem('theItem', value);
  }

  get theItem() {
    return localStorage.getItem('theItem');
  }
}
