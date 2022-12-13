import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore'
import { Item } from '../interfaces/item';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private afs: AngularFirestore) { }

  createListing(item: Item){
    return this.afs.collection('Items').add(item).then(response => 
      { console.log(response)}, error => console.log(error));
  }

  getAllListings(){
    return this.afs.collection('Items').doc();
  }

  getListing(id: any){
    return this.afs.collection('Items').doc(id).valueChanges();
  }

  deleteListing(item: Item){
    return this.afs.collection('Items').doc(item.id).delete();
  }

  editListing(item: Item, id:any){
    return this.afs.collection('Items').doc(id).update({
      id: item.id,
      device: item.device,
      model: item.model,
      year: item.year,
      price: item.price,
      imageUrl: item.imageUrl,
      description: item.description
    })
  }
}
