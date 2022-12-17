import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  id: any;
  listing: any;
  constructor( 
    private db: DataService,
    private route: ActivatedRoute,
    private router: Router
    ){}

  ngOnInit(): void {
    this.getAllListings();
    this.currentUserEmail = this.getauth.currentUser?.email;
    this.db.getListing(this.id).subscribe(listing=> {
      this.listing = listing;
    })
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

  deleteListing1(item:any){
    this.id = this.route.snapshot.params['id'];
    if(window.confirm('Are you sure you want to Delete: ' + item.device + ' ' + item.model + '?')){
      this.db.deleteListing(item.id);
      this.router.navigate(['/profile']);
    }
  }

}

