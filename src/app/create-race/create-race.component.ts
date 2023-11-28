import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-race-form',
  templateUrl: './create-race.component.html',
  styleUrls: ['./create-race.component.css']
})
export class CreateRaceComponent{
  raceForm = new FormGroup({
    unicorns: new FormControl(6, [Validators.required, Validators.min(2), Validators.max(8)]),
    racers: new FormArray([]),
    winner: new FormControl('', Validators.required),
    unicoinWager: new FormControl(0, Validators.required),
    raceOutcome: new FormControl('pending')
  });
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
