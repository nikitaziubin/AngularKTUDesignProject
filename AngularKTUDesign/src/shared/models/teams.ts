import { clubs } from "./clubs";

export class team {
  constructor(
    public name: string = 'Real',
    public matchResult: boolean = true,
    public id: number = 0,
    public clubNavigation: clubs = new clubs(
      1,
      'Club',
      "",
      'ClubAdres'
    )
  ) {}
}
