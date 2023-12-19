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
  authState: Observable<firebase.default.User | null> = this.auth.authState;

  constructor(private auth: AngularFireAuth) {
    this.auth.authState.subscribe((authState) => {
      console.log('authState', authState);
    });
  }

    signUp(email: string, password: string){

    this.auth.createUserWithEmailAndPassword(email, password)
      .then(() => {console.log('success');})
      .catch((error) => {console.log('error', error);})

   }

    login(email: string, password: string){
      this.auth.signInWithEmailAndPassword(email, password)
        .then(() => {console.log('success');})
        .catch((error) => {console.log('error', error);})
    }

    logOut() {
      this.auth.signOut()
      .then(() => {console.log('success');})
      .catch((error) => {console.log('error', error);})

    }

}


