import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginCredential } from '../models/logincredential';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  constructor(private router: Router, private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
    this.user.subscribe(user => {
      if(user){
        this.userDetails = user;
      } 
      else{
        this.userDetails = null;
      }
    });
  }

  isLoggedIn() {
    if (this.userDetails == null ){
      return false;
    } 
    else {
      return true;
    }
  }

  getUser(){
    return this.userDetails;
  }

  loginUser(credential: LoginCredential){ 
    return this.firebaseAuth.auth.signInWithEmailAndPassword(credential.email, credential.password);
  }

  logoutUser(){
    this.firebaseAuth.auth.signOut().then(res => {
      console.log(res);
      this.router.navigate(['/login']);
    });
  }
}
