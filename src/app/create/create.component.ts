import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../material-model';
import { FormsModule } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-create',
  standalone: true,
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  imports: [FormsModule, MaterialModule, CommonModule]
})
export class CreateComponent {
  constructor(private af: AngularFireStorage){}

  path: string = '';
  upload($event:any){
    this.path = $event.target.files[0]
  }
  uploadImage(){
    this.af.upload("/files" + Math.random() + this.path, this.path);
  }
}
