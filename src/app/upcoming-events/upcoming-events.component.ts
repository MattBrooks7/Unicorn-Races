import { Component } from '@angular/core';
import { RacesService } from '../races.service';


@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css']
})
export class UpcomingEventsComponent {
  races: any[] = [];

  SeeRaces:boolean = true;
  visibleRacers: boolean[] = Array(this.races.length).fill(false);

  constructor(public racesService: RacesService) { this.racesService.getRaceHeat().subscribe((data) =>{     console.log(data)
      this.races= data;}
  )}

  showRaceHeat() {
    console.log(this.racesService.raceHeat);
  }

  displayRacers(index: number) {
    this.SeeRaces = !this.SeeRaces;
    this.visibleRacers[index] = !this.visibleRacers[index];
  }

}
