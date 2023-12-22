import { Injectable } from '@angular/core';
import { Database, list, listVal, object, objectVal, push, ref } from '@angular/fire/database';



@Injectable({
  providedIn: 'root'
})

export class RacesService {

  raceHeat: Race[] = JSON.parse(localStorage.getItem('raceHeat') || '[]');

  constructor(private dataBase: Database) { }

  updateRaceHeat(race: Race) {
    this.raceHeat = [...this.raceHeat, {...race}]
  }

  saveRaceHeat(dataToSave: any) {

    push(ref(this.dataBase, 'raceHeat'), dataToSave).then(() => console.log('success')).catch((error) => console.log('error', error));

  }

  getRaceHeat() {
    return listVal(ref(this.dataBase, 'raceHeat'));
  }
}

class Race{
  numbers = [2, 3, 4, 5, 6, 7, 8];
  selectedNumber: number | undefined;
  inputs: number[] = [];
  racers: string[] = [];
  raceNum: number[] | undefined;
  raceTime: number[] | undefined;
}





