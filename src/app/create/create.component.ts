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
  items!: Item[];
  constructor(
    public dataService: DataService,
    public builder: FormBuilder,
    public router: Router
    ){ }

  ngOnInit() {
    this.dataService.GetAllListings();
    this.itemaForm();
  }
  itemaForm(){
    this.itemForm = this.builder.group({
      device: ['', [Validators.required, Validators.minLength(3)]],
      model: ['', [Validators.required, Validators.minLength(3)]],
      year: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(){
    this.dataService.createListing(this.itemForm.value);
  
    this.router.navigate(['catalog']);
    
    
  }
}
