import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';
import { AddTeamFormComponent } from './add-team-form/add-team-form.component';
import { ClubListComponent } from './Club/club-list/club-list.component';
import { ClubEditComponent } from './Club/club-edit/club-edit.component';
import { ClubCreateComponent } from './Club/club-create/club-create.component';

export const routes: Routes = [
  { path: 'club-list', component: ClubListComponent },
  { path: 'club-edit', component: ClubEditComponent },
  { path: 'club-create', component: ClubCreateComponent },
  { path: 'contact', component: ContactComponent },
];
