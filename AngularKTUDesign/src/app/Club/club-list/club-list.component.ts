import { Component, Input, OnInit } from '@angular/core';
import { clubs } from '../../../shared/models/clubs';
import { Router } from '@angular/router';
import { ClubEditComponent } from "../club-edit/club-edit.component";
import { ClubService } from '../../club.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-club-list',
  standalone: true,
  imports: [ClubEditComponent],
  templateUrl: './club-list.component.html',
  styleUrl: './club-list.component.css',
})
export class ClubListComponent implements OnInit {
  // clubs: clubs[] = [
  //   new clubs(1, 'Juventus', '2002-02-04', 'Turin'),
  //   new clubs(2, 'Barcelona', '2002-02-04', 'Barcelona'),
  //   new clubs(3, 'Barcelona', '2002-02-04', 'Barcelona'),
  //   new clubs(4, 'Barcelona', '2002-02-04', 'Barcelona'),
  // ];

  clubs!: clubs[];

  constructor(
    protected router: Router,
    protected clubService: ClubService,
    protected http: HttpClient,
    protected clubListComponent: ClubListComponent
  ) {}

  ngOnInit(): void {
    this.clubService.getClubs().subscribe((data: any) => {
      this.clubs = data;
    });
  }

  createClub() {
    this.router.navigate(['club-create']);
  }

  editClub(clubToEdit: clubs) {
    console.log(clubToEdit);
    this.clubService.setClubToEdit(clubToEdit);
    this.router.navigate(['club-edit']);
  }

  deleteClub(club: clubs) {
    console.log(club);
    this.router.navigate(['club-delete']);
  }

  returnToClubList() {
    this.router.navigate(['club-list']);
  }
}
