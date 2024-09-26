import { Component, Input, Output, EventEmitter } from '@angular/core';
import events from './../../shared/services/EventService';
import { team } from '../../shared/models/teams';

@Component({
  selector: 'team-list-item',
  standalone: true,
  imports: [],
  templateUrl: './team-list-item.component.html',
  styleUrl: './team-list-item.component.css',
})
export class TeamListItemComponent {
  @Input() team!: team;

  removeTeam(){
    events.emit('removeTeam', this.team);
  }

  tooglewonOrLost() {
    this.team.matchResult = !this.team.matchResult;
  }
}
