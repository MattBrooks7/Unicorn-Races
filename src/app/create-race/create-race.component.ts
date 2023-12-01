import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-race-form',
  templateUrl: './create-race.component.html',
  styleUrls: ['./create-race.component.css']
})
export class CreateRaceComponent{
  raceForm = new FormGroup({
    racers: new FormArray([])
  });
  numbers = [2, 3, 4, 5, 6, 7, 8];
  selectedNumber: number | undefined;
  inputs: number[] = [];


  updateInputs() {
    if (this.selectedNumber) {
      this.inputs = Array.from({ length: this.selectedNumber }, (_, i) => i + 1);
      console.log(this.inputs);
    } else {
      this.inputs = [];
    }
  }
  get racers() {
    return this.raceForm.get('racers') as FormArray;
  }
  submitForm() {
    if (this.raceForm.valid) {
      console.log(this.raceForm.value);
      // Handle form submission logic here
    }
  }
  // Add logic to dynamically add/remove racer fields, etc.
}
