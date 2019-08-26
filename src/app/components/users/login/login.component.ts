import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //constructor( public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }
  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) { }

  public email: string = '';
  public password: string = '';

  public isError = false;

  ngOnInit() {
  }

  onLogin(form: NgForm){

      this.authService.loginEmailUser(this.email, this.password)
      .then ((res) => {
        this.onLoginRedirect();
      },
      error => {
        this.isError = true;
      });

  }

  onLogOut(){
    this.authService.logoutUser();
  }
  onLoginRedirect(): void {
    this.router.navigate(['home']);
  }
}
