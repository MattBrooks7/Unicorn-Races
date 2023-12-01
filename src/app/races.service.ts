import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RacesService {

  Unicorn = new Unicorn();
  race = new Races();

  constructor() {

  }
}


class Unicorn {
  id: number = {} as number;
  name: string = '';
}

class Races {
  id: number = {} as number;
  name: string = '';
  unicorns: Unicorn[]= [];
}

createRace() {

}
