import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Router } from '@angular/router';
import { Item } from '../interfaces/item';
import { getAuth } from "firebase/auth";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit{
  auth = getAuth();
  createForm!:FormGroup;
  
  itemObj: Item = {
    id: '',
    device: '',
    model: '',
    year: NaN,
    imageUrl: '',
    price: NaN,
    description: '',
    owner: ''
  };
  id: string = '';
  device: string ='';
  model: string = '';
  year: number = NaN;
  imageUrl: string = '';
  price: number = NaN;
  description: string = '';
  owner: any = '';

  constructor(
    public dataService: DataService,
    public router: Router
  ){ }

  ngOnInit() {
    this.dataService.getAllListings();
    this.createForm = new FormGroup({
      device: new FormControl('', [Validators.required, Validators.minLength(3)]),
      model: new FormControl('', [Validators.required, Validators.minLength(3)]),
      year: new FormControl('', [Validators.required]),
      imageUrl: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }

  addListing(){
    if(this.createForm.invalid){ return; }
    let creator = this.auth.currentUser;
    const creatorEmail = creator?.email;
    this.itemObj.id = '';
    this.itemObj.device = this.device;
    this.itemObj.model = this.model;
    this.itemObj.year = this.year;
    this.itemObj.imageUrl = this.imageUrl;
    this.itemObj.price = this.price;
    this.itemObj.description = this.description;
    this.itemObj.owner = creatorEmail!.toString();
    this.dataService.createListing(this.itemObj);
    this.router.navigate(['catalog']);
    
    
  }
}
