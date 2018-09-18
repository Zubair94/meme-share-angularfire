import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MemeComponent } from './components/meme/meme.component';
import { NavComponent } from './components/nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddmemeComponent } from './components/addmeme/addmeme.component';
import { InviteComponent } from './components/invite/invite.component';
import { ModalgeneratorService } from './services/modalgenerator.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { MemedetailsComponent } from './components/memedetails/memedetails.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { AuthguardService } from './services/authguard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MemeComponent,
    NavComponent,
    AddmemeComponent,
    InviteComponent,
    ProfileComponent,
    MemedetailsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [
    ModalgeneratorService,
    AuthService,
    AuthguardService
  ],
  entryComponents:[
    AddmemeComponent,
    InviteComponent,
    ProfileComponent,
    MemedetailsComponent  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
