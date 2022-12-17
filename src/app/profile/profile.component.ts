import { Component, OnInit } from '@angular/core';
import { getAuth} from "firebase/auth";
import { DataService } from '../shared/data.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  getauth = getAuth();
  itemsList: any[] = [];
  currentUserEmail: any;
  userListings: any;
  constructor( 
    private db: DataService
    ){}

  ngOnInit(): void {
    this.getAllListings();
    this.currentUserEmail = this.getauth.currentUser?.email;
  }

  
  getAllListings(){
    this.db.getAllListings().subscribe(res => {
     this.itemsList = res.map((e:any) => {
       let data = e.payload.doc.data();
       data.id = e.payload.doc.id;
       return data;
     })
   }, (err: any) => {
     alert(err);
   })
  }

}

