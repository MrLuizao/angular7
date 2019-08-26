import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { transferInterface } from '../Models/transfer';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  

  constructor(private afs: AngularFirestore, private firebase: AngularFireDatabase) {
    this.transferCollection = afs.collection<transferInterface>('transfer');
    this.transfers = this.transferCollection.valueChanges();
  }
  private transferCollection: AngularFirestoreCollection<transferInterface>;
  private transfers: Observable<transferInterface []>;
  public selectedTransfer: transferInterface = {};

  getTransfers(){
    return this.transfers = this.transferCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map( action => {
        const data = action.payload.doc.data() as transferInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }
  

  doTransfer(transfers: transferInterface): void{
    this.transferCollection.add(transfers);
  }
  
  onSaveTransfer(){}


}
