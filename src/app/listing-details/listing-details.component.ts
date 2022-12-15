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
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.db.getListing(this.id).subscribe(listing=> {
      this.listing = listing;
    })
  }

  deleteListing1(item: Item){
    if(window.confirm('Are you sure you want to Delete: ' + item.device + ' ' + item.model + '?')){
      this.db.deleteListing(item);
      this.router.navigate(['catalog']);
    }
  }
}
