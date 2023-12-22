import { Injectable } from '@angular/core';
import { Auth, User, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
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
  authState: Observable<User | null>

  constructor(private auth: Auth) {
    this.authState = authState(this.auth)
    this.authState.subscribe((authState) => {
      console.log('authState', authState);
    });
  }

    signUp(email: string, password: string){
createUserWithEmailAndPassword(this.auth, email, password)
      .then(() => {console.log('success');})
      .catch((error) => {console.log('error', error);})

   }

    login(email: string, password: string){
      signInWithEmailAndPassword(this.auth, email, password)
        .then(() => {console.log('success');})
        .catch((error) => {console.log('error', error);})
    }

    logOut() {
      this.auth.signOut()
      .then(() => {console.log('success');})
      .catch((error) => {console.log('error', error);})

    }

}


