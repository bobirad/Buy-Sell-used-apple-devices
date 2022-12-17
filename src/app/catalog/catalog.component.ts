import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  itemsList: any[] = [];
  
  constructor(
    private db: DataService,
    ) {}

  ngOnInit(): void {
    this.getAllListings();
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
