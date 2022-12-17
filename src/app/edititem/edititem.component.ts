import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit{
  
  id: any;
 
  listing:any;

  constructor(
    public dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
    ) {}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.dataService.getListing(this.id).subscribe(res=> {
      this.listing = res;
    });
  
  }
  editSubmit(){
    let listing = {
      id: this.listing.id,
      device: this.listing.device,
      model: this.listing.model,
      year: this.listing.year,
      imageUrl: this.listing.imageUrl,
      price: this.listing.price,
      description: this.listing.description,
      owner: this.listing.owner
    }
    this.dataService.updateListing(this.id,listing);
    this.router.navigate([`/catalog/${this.id}`])
  }
}
