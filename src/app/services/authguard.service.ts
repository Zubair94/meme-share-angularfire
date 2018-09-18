import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthguardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(){
    if(this.authService.isLoggedIn()){
      //console.log("Xd");
      return true;
    }
    else{
      //console.log("Xd");
      this.router.navigate(['/login']);
      return false;
    }
  }
}
