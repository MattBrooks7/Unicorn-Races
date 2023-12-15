import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) { }

onSubmit(form: any) {
  if (form.valid) {
    // Handle form submission, e.g., send data to a server
    console.log('Form submitted:', this.user);
    this.authService.login(this.user.email, this.user.password).subscribe(thing => {console.log(thing)});
  }
}

}
