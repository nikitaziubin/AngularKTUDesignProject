import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient  } from '@angular/common/http';

let teamUri = 'https://localhost:7056/api/Teams';

 @Injectable({
   providedIn: 'root'
 })
export class TeamService {

  constructor(private http : HttpClient) { }

  getTeams () {
    return this.http.get(teamUri);
  }
}
