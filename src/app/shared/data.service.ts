import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';
import { AngularFireList } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { getAuth } from 'firebase/auth';
import { collection, query, where, getDocs } from "firebase/firestore";

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getauth = getAuth();
  itemsRef!: any;
  itemRef!: {};
  //db = getDatabase();
  constructor(
    private afs: AngularFirestore,
    ) {}

  
  createListing(item: Item) {
    item.id = this.afs.createId();
    return this.afs.collection('/items').add(item);
  }


  getListing(id:any) {
    return this.afs.doc('items/' + id).valueChanges();
  }

  async getListingsByCreator(){
    const listingsRef:any = this.afs.collection('/items');
    let currentUserEmail = this.getauth.currentUser?.email;

    const q = query(listingsRef, where("owner","==",currentUserEmail));
    const querySnapshot = await getDocs(q); 
    querySnapshot.forEach((doc) => {
      this.itemsRef.push(doc);
    }) 
    return this.itemsRef;
  }
  getAllListings() {
    return this.afs.collection('/items').snapshotChanges()
  }

 
  updateListing(id:any, item: Item) {
    return this.afs.collection('items').doc(id).update(item);
  }


  deleteListing(id:any) {
    return this.afs.doc('items/' + id).delete();
  }
}