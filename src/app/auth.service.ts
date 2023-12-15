import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, from, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 isuserLoggedIn = false;
 login (username: string, password: string): Observable<any> {
   return from(this.auth.signInWithEmailAndPassword(username, password))

 }
  constructor(private auth: AngularFireAuth) {
    this.auth.authState.subscribe((auth) => {
      console.log(auth);
      if (auth) {
        this.isuserLoggedIn = true;
      } else {
        this.isuserLoggedIn = false;
      }
    });
   }
}