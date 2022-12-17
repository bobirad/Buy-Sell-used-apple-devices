import { Component, OnInit } from '@angular/core';
import { getAuth} from "firebase/auth";
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  getauth = getAuth();
  listingsRef: any;
  currentUserEmail: any;
  userListings: any;
  result: any;
  constructor( 
    private router: Router,
    private db: DataService
    ){}

  ngOnInit(): void {
    //this.result = this.getCreatorsListings();
    this.getCreatorsListings();
  }



  
  /*getAllListings(){
    this.db.getAllListings().subscribe(res => {
     this.listingsRef = res.map((e:any) => {
       let data = e.payload.doc.data();
       data.id = e.payload.doc.id;
       return data;
     })
   }, (err: any) => {
     alert(err);
   })
  }

  */
  getCreatorsListings(){
    this.currentUserEmail = this.getauth.currentUser?.email;
    this.db.getAllListings().subscribe(res => {
     this.listingsRef = res.map((e:any) => {
       let data = e.payload.doc.data();
       data.id = e.payload.doc.id;
       //return data;
     })
   }, (err: any) => {
     alert(err);
   })
   for(let listing of this.listingsRef){
    if(listing.owner == this.currentUserEmail){
      this.userListings.push(listing);
    }
   }
  }


  /*getCreatorsListings(){
    this.db.getAllListings
    this.currentUserEmail = this.getauth.currentUser?.email;
    this.listingsRef = this.db.getAllListings;
    for(let listing of this.listingsRef){
      if(listing.owner == this.currentUserEmail){
        this.userListings.push(listing);
      }
    }
    return this.userListings;
  }*/



}

