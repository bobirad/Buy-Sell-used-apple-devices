import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit{
  
  public editForm!: FormGroup;
  itemRef!: any;
  id: any;
  constructor(
    public dataService: DataService,
    public builder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    /*this.editForm = this.builder.group({
      device: [''],
      model: [''],
      year: [''],
      imageUrl: [''],
      price: [''],
      description: ['']
    })*/
  }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    alert(this.id);

    /*this.dataService.getListing(this.id).subscribe( res => {
      this.itemRef = res;
      this.editForm = this.builder.group({
        'id': [this.itemRef.id],
        'device':[this.itemRef.device],
        'model':[this.itemRef.model],
        'year':[this.itemRef.year],
        'imageUrl':[this.itemRef.imageUrl],
        'price':[this.itemRef.price],
        'description': [this.itemRef.description]
      })
    })*/
  }
  editSubmit(){
    this.id = this.route.snapshot.params['id'];
    alert(this.id);
    this.dataService.editListing(this.editForm.value, this.id);
    this.router.navigate([`catalog/${this.id}`])
  }
}
