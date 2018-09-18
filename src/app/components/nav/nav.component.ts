import { Component, OnInit } from '@angular/core';
import { faUser, faSignInAlt, faSignOutAlt, faUserCircle, faArchive, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { ModalgeneratorService } from '../../services/modalgenerator.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  faUser = faUser;
  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
  faUserCircle = faUserCircle;
  faArchive = faArchive;
  faUserPlus = faUserPlus;
  constructor(private modalGenerator: ModalgeneratorService, private authService: AuthService) { 

  }
  ngOnInit() {
    
  }
  
  checkLogin(){
    return this.authService.isLoggedIn();
  }
  onInvite(){
    this.modalGenerator.inviteUser();
  }
  onProfile(){
    this.modalGenerator.userProfile();
  }
  onLogout(){
    this.authService.logoutUser();
  }
}
