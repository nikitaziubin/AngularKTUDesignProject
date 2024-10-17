import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClubService } from '../../club.service';
import { clubs } from '../../../shared/models/clubs';
import { ClubListComponent } from '../club-list/club-list.component';

@Component({
  selector: 'app-club-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './club-create.component.html',
  styleUrl: './club-create.component.css',
})
export class ClubCreateComponent  {
  constructor(private router: Router, private clubService: ClubService, private clubListComponent : ClubListComponent) {}
  createGroup = new FormGroup({
    createClubName: new FormControl('Barcelona', Validators.required),
    createCreateDate: new FormControl('', Validators.required),
    createAddress: new FormControl('Barcelona', Validators.required),
  });

  submitCreataClubForm() {
    const postClub = new clubs(
      0,
      this.createGroup.value.createClubName!,
      this.createGroup.value.createCreateDate!,
      this.createGroup.value.createAddress!
    );
    this.clubService.postClub(postClub).subscribe((data : any)=> {
      console.log(data);
      this.clubListComponent.returnToClubList();
    });
  }

}
