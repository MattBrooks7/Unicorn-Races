import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class RacesService {

    Unicorn = {id: 0, name: 'here is a unicorn'};
    race = new Races();
    UnicornList: Unicorns[] = [];

    constructor() {

    }

    createRace(){
      let UnicornList = new Unicorns();
      this.UnicornList.push(this.race);
      console.log(this.race);
    }

}

class Unicorns {
    id: number = {} as number;
    name: string = '';
  }
  class Races {
    id: number = {} as number;
    name: string = '';
    unicorns: Unicorns[]= [];
  }



