import { Component } from '@angular/core';

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
onSubmit(form: any) {
  if (form.valid) {
    // Handle form submission, e.g., send data to a server
    console.log('Form submitted:', this.user);
  }
}

}
