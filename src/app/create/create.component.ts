import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit{
  public itemForm!: FormGroup;
  itemsList: Item[] = [];
  itemObj: Item = {
    id: '',
    device: '',
    model: '',
    year: NaN,
    imageUrl: '',
    price: NaN,
    description: ''
  };
  id: string = '';
  device: string ='';
  model: string = '';
  year: number = NaN;
  imageUrl: string = '';
  price: number = NaN;
  description: string = '';

  constructor(
    public dataService: DataService,
    public builder: FormBuilder,
    public router: Router
  ){ }

  ngOnInit() {
    this.dataService.GetAllListings();
    //this.itemaForm();
  }
  /*
  itemaForm(){
    this.itemForm = this.builder.group({
      device: ['', [Validators.required, Validators.minLength(3)]],
      model: ['', [Validators.required, Validators.minLength(3)]],
      year: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(10)]],
    });
  }*/

  addListing(){
    //this.dataService.createListing(this.itemForm.value);
    this.itemObj.id = '';
    this.itemObj.device = this.device;
    this.itemObj.model = this.model;
    this.itemObj.year = this.year;
    this.itemObj.imageUrl = this.imageUrl;
    this.itemObj.price = this.price;
    this.itemObj.description = this.description;
    this.dataService.createListing(this.itemObj);
    this.router.navigate(['catalog']);
    
    
  }
}
