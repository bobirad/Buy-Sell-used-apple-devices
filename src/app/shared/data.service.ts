import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore'
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore) { }

  listItem(item: Item){
    item._id = this.afs.createId();
    return this.afs.collection('/Items').add(item);
  }

  getAllListings(){
    return this.afs.collection('/Items').snapshotChanges;
  }

  deleteItem(item: Item){
    return this.afs.doc('/Items' + item._id).delete();
  }

  updateItem(item: Item){
    this.deleteItem(item);
    this.listItem(item);
  }
}
