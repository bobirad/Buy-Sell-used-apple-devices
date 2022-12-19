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
  listing: any;

  constructor(
    private db: DataService,
    private route: ActivatedRoute,
    ) {}
  
  ngOnInit(): void {
    //const currentUserEmail = this.auth.currentUser?.email;
    this.id = this.route.snapshot.params['id'];
    this.db.getListing(this.id).subscribe((listing: any)=> {
      this.listing = listing;
    })

  }
  
}
