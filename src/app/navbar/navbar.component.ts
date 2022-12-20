import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent{
  constructor(private auth: AuthService) {}
  get isLoggedIn(){
    return this.auth.isLoggedIn;
  }
  get user() {
    return this.auth.fireauth.currentUser;
  }
  /*ngOnInit(): void {
  this.isLoggedIn();
  }
  isLoggedIn() {
    //return this.auth.fireauth.currentUser != null;
    return this.auth.isLoggedIn;
  }*/
  logout(){
    this.auth.logout();
  }
}

