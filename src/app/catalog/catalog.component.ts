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
    id: '',
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
    this.getAllListings();
  }
  async getAllListings(){
    this.db.GetAllListings().subscribe(res => {
      this.itemsList = res.map((e:any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    }, (err: any) => {
      alert('Error while fetching items data.');
    })
  }

}
