import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  itemsRef!: AngularFireList<any>;
  itemRef!: Observable<any>;
  listing!: Observable<any>;
  constructor(
    private afs: AngularFirestore,
    private db: AngularFireDatabase
    ) {}

  
  createListing(item: Item) {
    item.id = this.afs.createId();
    return this.afs.collection('/items').add(item);
  }


  getListing(id:any) {
    return this.db.object('items/' + id).valueChanges();;
  }


  getAllListings() {
    return this.afs.collection('/items').snapshotChanges()
  }

 
  editListing(item: Item) {
    this.deleteItem(item);
    this.createListing(item);
  }


  deleteItem(item: Item) {
    return this.afs.doc('/items'+item.id).delete();
  }
}