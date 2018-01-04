import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactPanelComponent } from './contact-panel/contact-panel.component';
import { EditContactComponent } from './contact-panel/edit-contact/edit-contact.component';
import { NewContactComponent } from './contact-panel/new-contact/new-contact.component';
import { ContactSearchComponent } from './contact-list/contact-search/contact-search.component';
import { ContactListItemComponent } from './contact-list/contact-list-item/contact-list-item.component';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactPanelComponent,
    EditContactComponent,
    NewContactComponent,
    ContactSearchComponent,
    ContactListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
