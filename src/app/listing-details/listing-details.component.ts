import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from '../interfaces/item';
import { DataService } from '../shared/data.service';
@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css']
})
export class ListingDetailsComponent {
  id: any;
  listing: any = {
    id: '',
    device: '',
    model: '',
    year: NaN,
    imageUrl: '',
    price: NaN,
    description: ''
  }

  constructor(
    private db: DataService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.db.getListing(this.id).subscribe(listing=> {
      this.listing = listing;
    })
  }
}
