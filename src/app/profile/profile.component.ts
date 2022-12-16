import { Component, OnInit } from '@angular/core';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  getauth = getAuth();
  constructor( private router: Router){}
  ngOnInit(): void {
    /*onAuthStateChanged(this.getauth, (user) => {
      if (user) {
        const uid = user.uid;
        alert(uid);
      } else {
        this.router.navigate(['login']);
      }
    this.auth.currentUser()
    
  })*/


  
}
}

