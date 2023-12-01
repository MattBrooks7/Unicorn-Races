import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = {
    email: '',
    password: ''
  };
onSubmit(form: any) {
  if (form.valid) {
    // Handle form submission, e.g., send data to a server
    console.log('Form submitted:', this.user);
  }
}

}
