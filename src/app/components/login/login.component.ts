import { Component, OnInit } from '@angular/core';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { CustomFormBuilder } from '../../models/formbuilder';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoginCredential } from '../../models/logincredential';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends CustomFormBuilder implements OnInit {
  
  public LoginForm: FormGroup;
  private emailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  faSignInAlt = faSignInAlt;
  
  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) { 
    super();
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.LoginForm = this.formBuilder.group({
      Email: [null, Validators.pattern(this.emailPattern)],
      Password: [null]
    });
  }

  get Email(){
    return this.LoginForm.get('Email') as FormControl;
  }
  get Password(){
    return this.LoginForm.get('Password') as FormControl;
  }

  sendForm(){
    var credentials: LoginCredential = {
      email: this.Email.value,
      password: this.Password.value
    }
    this.authService.loginUser(credentials)
      .then((res) => {
        console.log(res);
        if(res){
          this.router.navigate(['/meme']);
        }
      })
      .catch((err) => console.log('error: ' + err));
    console.log(this.LoginForm.value);
    this.resetForm(this.LoginForm);
  }
}
