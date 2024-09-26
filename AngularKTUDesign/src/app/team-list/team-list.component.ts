import { Component, Input, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { team } from '../../shared/models/teams';
import { EventEmitter } from 'node:stream';
import { TeamListItemComponent } from "../team-list-item/team-list-item.component";

@Component({
  selector: 'team-list',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, TeamListItemComponent],
  templateUrl: './team-list.component.html',
  styleUrl: './team-list.component.css',
})
export class TeamListComponent {
  @Input() teamsFromArray: team[] = [];
  @Input() teamsAll: team[] = [];
}
