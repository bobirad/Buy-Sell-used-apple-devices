import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';
import { AngularFireList } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  itemsRef!: AngularFireList<any>;
  itemRef!: Observable<any>;
  listing!: Observable<any>;
  listingDoc!: AngularFirestoreDocument<Item>;

  constructor(
    private afs: AngularFirestore,
    ) {}

  
  createListing(item: Item) {
    item.id = this.afs.createId();
    return this.afs.collection('/items').add(item);
  }


  getListing(id:any) {
    return this.afs.doc('items/' + id).valueChanges();;
  }


  getAllListings() {
    return this.afs.collection('/items').snapshotChanges()
  }

 
  editListing(item: Item) {
    this.deleteListing(item);
    this.createListing(item);
  }


  deleteListing(item: Item) {
    return this.afs.collection('items').doc(item.id).delete();
  }
}