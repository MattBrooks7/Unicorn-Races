import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private authService: AuthService) { }
  user = {
    email: '',
    password: ''
  };
onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.authService.signUp(email, password);
    console.log('Form submitted:', this.user);
  };
};
