import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';
import { AddTeamFormComponent } from './add-team-form/add-team-form.component';

export const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'addTeam', component: AddTeamFormComponent},
  {path: 'contact', component: ContactComponent},
];
