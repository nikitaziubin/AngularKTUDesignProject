import { Component, Input, OnInit } from '@angular/core';
import { clubs } from '../../../shared/models/clubs';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ClubService } from '../../club.service';
import { Router } from '@angular/router';
import { ClubListComponent } from '../club-list/club-list.component';


@Component({
  selector: 'club-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './club-edit.component.html',
  styleUrl: './club-edit.component.css',
})
export class ClubEditComponent {
  constructor(
    private clubService: ClubService,
    private router: Router,
    private clubListComponent: ClubListComponent
  ) {}
  clubToEdit: clubs = this.clubService.getClubToEdit();

  // ngOnInit(): void {
  //   this.clubToEdit = this.clubService.getClubToEdit();
  // }
  editGroup = new FormGroup({
    editClubName: new FormControl(this.clubToEdit.name, Validators.required),
    editClubCreate_date: new FormControl(this.clubToEdit.CreateDate, [
      Validators.required,
    ]),
    editClubAdress: new FormControl(this.clubToEdit.address, [
      Validators.required,
    ]),
  });

  submitForm() {
    console.log();
    const putClub = new clubs(
      this.clubToEdit.id,
      this.editGroup.value.editClubName!,
      this.editGroup.value.editClubCreate_date!,
      this.editGroup.value.editClubAdress!
    );
    this.clubService.putClub(putClub).subscribe((data: any) => {
      console.log(data);
      this.clubListComponent.returnToClubList();
    });
  }
}
