import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { OrderModule } from 'ngx-order-pipe';


import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactPanelComponent } from './contact-panel/contact-panel.component';
import { EditContactComponent } from './contact-panel/edit-contact/edit-contact.component';
import { NewContactComponent } from './contact-panel/new-contact/new-contact.component';
import { ContactListItemComponent } from './contact-list/contact-list-item/contact-list-item.component';
import {HttpModule} from '@angular/http';
import { PanelInteractionsComponent } from './contact-panel/panel-interactions/panel-interactions.component';
import { MatDialogModule } from '@angular/material/dialog';
import {
  MatAutocomplete, MatAutocompleteModule,
  MatButtonModule, MatCheckboxModule, MatError, MatFormFieldControl, MatFormFieldModule, MatIconModule, MatInputModule, MatOptionModule,
  MatSelectModule, MatSnackBarModule, MatTooltipModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, NgModel, NgModelGroup, ReactiveFormsModule} from '@angular/forms';
import {Ng2Webstorage} from 'ngx-webstorage';
import { SearchFilterPipe } from './search-filter.pipe';
import {AsyncLocalStorageModule} from 'angular-async-local-storage';
import {NgPipesModule} from 'ngx-pipes';
import {OVERLAY_PROVIDERS} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactPanelComponent,
    EditContactComponent,
    NewContactComponent,
    ContactListItemComponent,
    PanelInteractionsComponent,
    SearchFilterPipe
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
    MatTooltipModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    Ng2Webstorage,
    AsyncLocalStorageModule,
    NgPipesModule
  ],
  entryComponents: [NewContactComponent],
  providers: [OVERLAY_PROVIDERS, PlatformModule],
  bootstrap: [AppComponent],
  exports: [
    ReactiveFormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
