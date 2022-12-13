import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  [x: string]: any;
  itemsRef!: AngularFireList<any>;
  itemRef!: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
  // Create Student
  createListing(item: Item) {
    this.itemsRef.push({
      device: item.device,
      model: item.model,
      year: item.year,
      imageUrl: item.imageUrl,
      price: item.price,
      description: item.description
    });
  }
  // Fetch Single Student Object
  GetListing(id: string) {
    this.itemRef = this.db.object('items-list/' + id);
    return this.itemRef;
  }
  // Fetch Students List
  GetAllListings() {
    this.itemsRef = this.db.list('items-list');
    return this.itemsRef;
  }
  // Update Student Object
  editListing(item: Item) {
    this.itemRef.update({
      device: item.device,
      model: item.model,
      year: item.year,
      imageUrl: item.imageUrl,
      price: item.price,
      description: item.description
    });
  }
  // Delete Student Object
  DeleteStudent(id: string) {
    this.itemRef = this.db.object('items-list/' + id);
    this.itemRef.remove();
  }
}