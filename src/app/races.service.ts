import { Injectable } from '@angular/core';
import { CreateRaceComponent } from './create-race/create-race.component';


@Injectable({
  providedIn: 'root'
})

export class RacesService {

  raceHeat: Race[] = JSON.parse(localStorage.getItem('raceHeat') || '[]');

  constructor() { }

  updateRaceHeat(race: Race) {
    this.raceHeat = [...this.raceHeat, {...race}]
  }

  saveRaceHeat() {
    localStorage.setItem('raceHeat', JSON.stringify(this.raceHeat));
  }

  /* getRaceHeat() {
    return this.raceHeat;
  } */
}

class Race{
  numbers = [2, 3, 4, 5, 6, 7, 8];
  selectedNumber: number | undefined;
  inputs: number[] = [];
  racers: string[] = [];
  raceNum: number[] | undefined;
  raceTime: number[] | undefined;
}





