import { Component } from '@angular/core';
import { RacesService } from './races.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Unicorns';

  constructor(private racesService: RacesService) { }

  makerace(){
    this.racesService.createRace();
    return this.racesService.UnicornList;
  }
}
