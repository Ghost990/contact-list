import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.scss']
})
export class ContactSearchComponent implements OnInit {
  stateForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.stateForm = new FormGroup({
      search: new FormControl()
    });
  }

  ngOnInit() {
  }

  getSearchValue() {
    return this.stateForm.value.search;
  }

}
