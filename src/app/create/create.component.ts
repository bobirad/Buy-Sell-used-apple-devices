import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material-model';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from '../shared/data.service';
import { Item } from '../interfaces/item';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-create',
  standalone: true,
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  imports: [
    FormsModule, 
    MaterialModule, 
    CommonModule, 
    BrowserModule,
  ]
})
export class CreateComponent implements OnInit{
  itemsList : Item[] = [];
  itemObj: Item = {
    id: '',
    device: '',
    model: '',
    year: 0,
    imageUrl: '',
    price: 0,
    description: '',
    owner: ''
  };
  id: string = '';
  device: string = '';
  model: string = '';
  year: number = 0;
  price: number = 0;
  imageUrl: string = '';
  description: string = '';
  owner: string = '';
  constructor(private auth: AuthService, private data: DataService){}

  ngOnInit(): void{
    this.getAllListings();
  }

  getAllListings():any {
    return this.getAllListings().subscribe((res: { map: (arg0: (e: any) => void) => Item[]; }) => {
      this.itemsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        data;
      })
    })
  }
  resetForm(){
    this.device = '';
    this.model = '';
    this.year = NaN;
    this.imageUrl = '';
    this.price = NaN;
    this.description = '';
  }
  createListing(){
    if(this.device == '' || this.model == '' || this.year == NaN 
    || this.imageUrl == '' || this.description == '' || this.price == NaN){
      alert('Fill all input fields');
      return;
    }
    this.itemObj.id = '';
    this.itemObj.device = this.device;
    this.itemObj.model = this.model;
    this.itemObj.year = this.year;
    this.itemObj.imageUrl = this.imageUrl;
    this.itemObj.price = this.price;
    this.itemObj.description = this.description;

    this.data.createListing(this.itemObj);
    this.resetForm();
  }

  /*uploadImage(){
  //  this.af.upload("/files" + Math.random() + this.path, this.path);
   }*/
}
