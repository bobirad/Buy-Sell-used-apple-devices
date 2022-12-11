import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore'
import { Item } from '../interfaces/item';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private afs: AngularFirestore) { }

  createListing(item: Item){
    item.id = this.afs.createId();
    return this.afs.collection('/Items').add(item);
  }

  getAllListings(){
    return this.afs.collection('/Items').doc();
  }

  deleteListing(item: Item){
    return this.afs.doc('/Items' + item.id).delete();
  }

  editListing(item: Item){
    this.deleteListing(item);
    this.createListing(item);
  }
}
