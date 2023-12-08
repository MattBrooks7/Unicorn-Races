import { Component } from '@angular/core';

@Component({
  selector: 'app-unicoins',
  templateUrl: './unicoins.component.html',
  styleUrls: ['./unicoins.component.css']
})
export class UnicoinsComponent {

  Unicoins = 0;

  increase() {
    this.Unicoins++;
  }

  decrease() {
    if (this.Unicoins > 0) {
      this.Unicoins--;
    }
  }

  updateUnicoins(value: number) {
    this.Unicoins = value;
  }

}
