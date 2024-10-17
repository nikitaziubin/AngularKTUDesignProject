import { Injectable } from '@angular/core';
import { clubs } from '../shared/models/clubs';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';

let ClubsUri = 'https://localhost:7056/api/Club/';
let ClubsUriCreate = 'https://localhost:7056/api/Club/PostClub';

@Injectable({
  providedIn: 'root',
})
export class ClubService {
  constructor(private http: HttpClient) {}

  club!: clubs;

  getClubs() {
    return this.http.get(ClubsUri);
  }

  postClub(postClub : clubs) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(ClubsUriCreate, postClub, { headers });
  }

  putClub(putClub: clubs) {
    return this.http.put(ClubsUri, putClub);
  }

  deleteClub(deleteClub: clubs) {
    return this.http.delete(ClubsUri);
  }

  setClubToEdit(club: clubs) {
    this.club = club;
  }

  getClubToEdit() {
    return this.club;
  }
}
