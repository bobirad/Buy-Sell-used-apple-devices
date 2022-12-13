import { Component, OnInit } from '@angular/core';
import { Item } from '../interfaces/item';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  itemsList: Item[] = [];
  itemObj: Item = {
    device: '',
    model: '',
    year: NaN,
    imageUrl: '',
    price: NaN,
    description: '',
  };
  device: string = '';
  model: string = '';
  year: number = NaN;
  imageUrl: string = '';
  price: number = NaN;
  description: string = '';
  constructor(private db: DataService) {}

  errorFetcingData = false;


  ngOnInit(): void {
    this.db.GetAllListings().subscribe({
      next: (value: Item[]) => {
        this.itemsList = value;
      },
      error: (err: any) => {
        this.errorFetcingData = true;
        console.error(err);
      }
    });
  }

}
