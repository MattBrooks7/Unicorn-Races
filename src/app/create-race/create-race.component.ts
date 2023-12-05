import { Component } from '@angular/core';
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
  raceId: number | undefined;



  updateInputs() {
    if (this.selectedNumber) {
      this.inputs = Array.from({ length: this.selectedNumber }, (_, i) => i + 1);
      this.racers = Array(this.selectedNumber).fill('');
    } else {
      this.inputs = [];
    }
  }

  getRacers() {
    console.log('Racers: ', this.racers);
    console.log('Race ID: ', this.raceId);
    

  }

  submitForm() {

  }
}
