import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { team } from '../../shared/models/teams';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const filters = [
  (team: team) => team,
  (team: team) => team.matchResult == true,
  (team: team) => team.matchResult == false,
];

@Component({
  selector: 'app-team-filter',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './team-filter.component.html',
  styleUrl: './team-filter.component.css',
})
export class TeamFilterComponent {
  //@Output() filter = new EventEmitter<any>();
  filter = output<any>();
  listFilter: any = '0';

  changeFilter(value: any) {
    this.filter.emit(filters[value]);
  }
}
