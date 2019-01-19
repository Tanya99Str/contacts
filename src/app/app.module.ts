import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent, NavMainComponent } from './components';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NewContactComponent } from './pages/new-contact/new-contact.component';
import { ContactsListComponent } from './pages/contacts/contacts-list/contacts-list.component';
import { SearchFilterPipe } from './shared/pipes';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    NewContactComponent,
    ContactsListComponent,
    SearchFilterPipe,
    NavMainComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
