import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { DataService } from '../shared/data.service';
@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css']
})
export class ListingDetailsComponent {
  auth = getAuth()
  id: any;
  devicename: any;
  listing: any;

  constructor(
    private db: DataService,
    private route: ActivatedRoute,
    private router: Router
    ) {}
  
  ngOnInit(): void {
    let owner: any;
    const currentUserEmail = this.auth.currentUser?.email;
    this.id = this.route.snapshot.params['id'];
    this.db.getListing(this.id).subscribe(listing=> {
      this.listing = listing;
    })
    this.devicename = this.listing.device;

    
    alert(owner);
  }
  isOwner(){
  }
  deleteListing1(item:any){
    this.id = this.route.snapshot.params['id'];
    if(window.confirm('Are you sure you want to Delete: ' + item.device + ' ' + item.model + '?')){
      this.db.deleteListing(this.id);
      this.router.navigate(['catalog']);
    }
  }
}
