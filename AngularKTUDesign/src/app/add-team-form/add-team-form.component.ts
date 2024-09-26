import { Component, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { team } from '../../shared/models/teams';

@Component({
  selector: 'add-team-form',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './add-team-form.component.html',
  styleUrl: './add-team-form.component.css',
})
export class AddTeamFormComponent {
  @Output() addTeam = new EventEmitter<team>();
  newTeamName = '';

  addNewTeam() {
    this.addTeam.emit(new team(this.newTeamName));
    this.newTeamName = '';
  }
}
