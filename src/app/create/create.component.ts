import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Router } from '@angular/router';
import { Item } from '../interfaces/item';
import { getAuth } from "firebase/auth";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {

  auth = getAuth();
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
  createForm!: FormGroup;
  device: any;
  model: any;
  year: any;
  imageUrl: any;
  price: any;
  description: any;


  constructor(
    public dataService: DataService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.createForm = new FormGroup({
      device: new FormControl('', [Validators.required, Validators.minLength(3)]),
      model: new FormControl('', [Validators.required, Validators.minLength(3)]),
      year: new FormControl('', Validators.required),
      imageUrl: new FormControl('', [Validators.required, Validators.minLength(3)]),
      price: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
    })
  }
  addListing() {
    this.itemObj = this.createForm.value;
    const creatorEmail = this.auth.currentUser?.email;
    this.itemObj.owner = creatorEmail!.toString();
    this.itemObj.id = '';
    
    if (this.createForm.invalid) { return; }
    else {
      this.dataService.createListing(this.itemObj);
      this.router.navigate(['catalog']);
    }

  }





  /*
    auth = getAuth();
    createForm!: FormGroup;
    itemObj: any;
  
    id!: string;
    device!: string;
    model!: string;
    year!: number;
    imageUrl!: string;
    price!: number;
    description!: string;
    owner!: any;
  
    constructor(
      public dataService: DataService,
      public router: Router
    ){ }
  
    ngOnInit() {
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
      alert('submited');
      const {device, model, year, imageUrl, price, description} = this.createForm.value;
  
      if(this.createForm.invalid){ return; }
      const creatorEmail = this.auth.currentUser?.email;
      this.itemObj.id = '';
      this.itemObj.device = device;
      this.itemObj.model = model;
      this.itemObj.year = year;
      this.itemObj.imageUrl = imageUrl;
      this.itemObj.price = price;
      this.itemObj.description = description;
      this.itemObj.owner = creatorEmail!.toString();
      this.dataService.createListing(this.itemObj);
      this.router.navigate(['catalog']);
      
      
    }
  
  */

}