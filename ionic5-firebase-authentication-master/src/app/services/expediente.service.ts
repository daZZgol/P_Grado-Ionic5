import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, CollectionReference } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { ExpedienteI } from '../models/expediente.interface';





@Injectable({
  providedIn: 'root'
})
export class ExpedienteService {

  private expedienteCollection: AngularFirestoreCollection<ExpedienteI>;
  private expedientes: Observable<ExpedienteI[]>;
  //private queryExp: Observable<ExpedienteI[]>;
  //private queryExp: CollectionReference;
  
  constructor(private db: AngularFirestore) { 
    this.expedienteCollection = db.collection<ExpedienteI>('expedientes');    
    this.expedientes = this.expedienteCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map (a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }
    ));
  }


  getExpedientes(){
    return this.expedientes;
    
  }

  getExpediente(id: string){
    
    return this.expedienteCollection.doc<ExpedienteI>(id).valueChanges();
  }

  updateExpediente(expediente:ExpedienteI, id: string){
    return this.expedienteCollection.doc(id).update(expediente);
  }

  addExpediente(expediente:ExpedienteI){
    return this.expedienteCollection.add(expediente);
  }

  deleteExpediente(id:string){
    return this.expedienteCollection.doc(id).delete();
  }

  consultaExpediente (ci: string ) {    
    //console.log("lo que llega de alla", ci);
    const cedula = ci;
    console.log("el id: ", cedula)
    return this.db.collection('/expedientes', ref => ref.where('ci', '==', '3378542' )).valueChanges();
    //console.log('Aqui la puta consulta:', this.db.collection('expedientes', ref => ref.where('ci', '==', ci)).valueChanges())
  }
}
