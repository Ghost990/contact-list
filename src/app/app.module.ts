import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OrderModule } from 'ngx-order-pipe';


import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactPanelComponent } from './contact-panel/contact-panel.component';
import { EditContactComponent } from './contact-panel/edit-contact/edit-contact.component';
import { NewContactComponent } from './contact-panel/new-contact/new-contact.component';
import { ContactSearchComponent } from './contact-list/contact-search/contact-search.component';
import { ContactListItemComponent } from './contact-list/contact-list-item/contact-list-item.component';
import {HttpModule} from '@angular/http';
import { SortPipe } from './sort.pipe';
import { ContactListHeaderComponent } from './contact-list/contact-list-header/contact-list-header.component';
import { PanelInteractionsComponent } from './contact-panel/panel-interactions/panel-interactions.component';
import { MatDialogModule } from '@angular/material/dialog';
import {
  MatAutocomplete, MatAutocompleteModule,
  MatButtonModule, MatCheckboxModule, MatError, MatFormFieldControl, MatFormFieldModule, MatInputModule, MatOptionModule,
  MatSelectModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, NgModel, NgModelGroup, ReactiveFormsModule} from '@angular/forms';
import {Ng2Webstorage} from 'ngx-webstorage';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactPanelComponent,
    EditContactComponent,
    NewContactComponent,
    ContactSearchComponent,
    ContactListItemComponent,
    SortPipe,
    ContactListHeaderComponent,
    PanelInteractionsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    OrderModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatCheckboxModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    Ng2Webstorage
  ],
  entryComponents: [NewContactComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
