import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  itemsRef!: AngularFireList<any>;
  itemRef!: AngularFireObject<any>;
  constructor(
    private db: AngularFireDatabase,
    private afs: AngularFirestore
    ) {}

  // Create Student
  
  createListing(item: Item) {

    /*this.itemsRef.push({
      device: item.device,
      model: item.model,
      year: item.year,
      imageUrl: item.imageUrl,
      price: item.price,
      description: item.description
    });*/

    item.id = this.afs.createId();
    return this.afs.collection('/items').add(item);
  }
  // Fetch Single Student Object
  GetListing(id: string) {
    this.itemRef = this.db.object('items-list/' + id);
    return this.itemRef;
  }
  // Fetch Students List
  GetAllListings() {

    /*this.itemsRef = this.db.list('items-list');
    return this.itemsRef;*/

    return this.afs.collection('/items').snapshotChanges()

  }
  // Update Student Object
  editListing(item: Item) {
    this.deleteItem(item);
    this.createListing(item);
  }
  // Delete Student Object
  deleteItem(item: Item) {
    return this.afs.doc('/items'+item.id).delete();
  }
}