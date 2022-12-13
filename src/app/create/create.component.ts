import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit{
  public itemForm: FormGroup;

  constructor(
    public dataservice: DataService,
    public formBuilder: FormBuilder,
    public router: Router
  ){
    this.itemForm = this.formBuilder.group({
      device: [''],
      model: [''],
      year: [''],
      price: [''],
      imageUrl: [''],
      description: ['']
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.dataservice.createListing(this.itemForm.value);
    console.log(this.itemForm.value)
    this.router.navigate(['catalog']);
  }
}
