import { Component } from '@angular/core';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { MatInputModule } from '@angular/material/input';
import { RacesService } from '../races.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-race-form',
  templateUrl: './create-race.component.html',
  styleUrls: ['./create-race.component.css']
})
export class CreateRaceComponent{
  numbers = [2, 3, 4, 5, 6, 7, 8];
  selectedNumber: number | undefined;
  inputs: number[] = [];
  racers: string[] = [];
  raceNum: number[] | undefined;
  raceTime: number | undefined;
  raceDate: number | undefined;

  constructor(public raceService: RacesService) {}


  updateInputs() {
    if (this.selectedNumber) {
      this.inputs = Array.from({ length: this.selectedNumber }, (_, i) => i + 1);
      this.racers = Array(this.selectedNumber).fill('');
    } else {
      this.inputs = [];
    }
  }

  submitForm() {
    console.log('Racers: ', this.racers);
    console.log('Race ID: ', this.raceNum);
    console.log('raceDate: ', this.raceDate);
    console.log('raceTime: ', this.raceTime);
    this.raceService.saveRaceHeat({racers: this.racers, raceNum: this.raceNum, raceDate: this.raceDate, raceTime: this.raceTime});
  }
}
