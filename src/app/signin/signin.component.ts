import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private authService: AuthService) { }

  user = {
    email: '',
    password: ''
  };


onSubmit(form: any) {
  const email = form.value.email;
    const password = form.value.password;
    
  this.authService.login(email, password);
    console.log('Form submitted:', this.user);
}

}
