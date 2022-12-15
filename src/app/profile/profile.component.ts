import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  auth!: AuthService;
  constructor(){}
  ngOnInit(): void {
    //this.auth.currentUser()
  }
}
