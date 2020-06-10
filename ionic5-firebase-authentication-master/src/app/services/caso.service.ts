import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { CasoI } from '../models/caso.interface';



@Injectable({
  providedIn: 'root'
})
export class CasoService {

  private casoCollection: AngularFirestoreCollection<CasoI>;
  private casos: Observable<CasoI[]>;
  
  
  constructor(private db: AngularFirestore ) { 
    this.casoCollection = db.collection<CasoI>('casos');
    this.casos = this.casoCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map (a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }
    ));
  }


  getCasos(){
    return this.casos;
  }

  getCaso(id: string){
    return this.casoCollection.doc<CasoI>(id).valueChanges();
  }

  updateCaso(caso:CasoI, id: string){
    return this.casoCollection.doc(id).update(caso);
  }
  
  addCaso(caso:CasoI){
    return this.casoCollection.add(caso);
  }

  deleteCaso(id: string){
    return this.casoCollection.doc(id).delete();
  }

  consultaCaso (id: string ): Observable<any> {    
    //console.log("el id del exp: ", id)
    return this.db.collection('/casos', ref => ref.where('idexpediente', '==', id )).valueChanges();
    
  }
}
