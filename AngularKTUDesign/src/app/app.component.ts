import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { team } from '../shared/models/teams';
import { TeamListComponent } from "./team-list/team-list.component";
import { AddTeamFormComponent } from "./add-team-form/add-team-form.component";
import { TeamFilterComponent } from "./team-filter/team-filter.component";
import { TeamService } from './team.service';
import events from './../shared/services/EventService';
import { ContactComponent } from "./contact/contact.component";
import { Router, RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    TeamListComponent,
    AddTeamFormComponent,
    TeamFilterComponent,
    ContactComponent,
    RouterModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  items!: team[];

  constructor(private teamService: TeamService, private router: Router) {
    events.listen('removeTeam', (team: team) => {
      console.log(team);
      let index = this.items.indexOf(team);
      this.items.splice(index, 1);
    });
  }

  ngOnInit(): void {
    console.log('inside OnInit');
    this.teamService.getTeams().subscribe((data: any) => {
      this.items = data;
    });
  }

  filter: any = () => true;

  get visibleTeams(): team[] {
    return this.items.filter(this.filter);
  }
  goToClubList() {
    this.router.navigate(['club-list']);
  }
}
