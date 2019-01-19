import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NewContactComponent } from './pages/new-contact/new-contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'contacts', pathMatch: 'full'},
  { path: 'contacts', component: ContactsComponent },
  { path: 'new-contact', component: NewContactComponent },
  { path:'**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
