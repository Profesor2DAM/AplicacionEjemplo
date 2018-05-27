import { Injectable } from '@angular/core';
import {Asignatura} from "../asignatura";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import * as faker from 'faker';

type asignaturasCollection = AngularFirestoreCollection<Asignatura[]>;
type asignaturaDocument = AngularFirestoreDocument<Asignatura>;

@Injectable()
export class AsignaturaService {

  constructor(
  	private afs: AngularFirestore) {
  
  }

  asignaturas(): asignaturasCollection{
  	return this.afs.collection<Asignatura[]>('asignaturas');
  }

  asignatura(id: string | number): asignaturaDocument{
  	return this.afs.doc<Asignatura>('asignaturas/${id}');
  }

  save(asignatura: Asignatura): Promise<any>{
  	asignatura.id=faker.random.alphaNumeric(16);
  	return this.asignaturas().doc(asignatura.id).set(Object.assign({},asignatura));
  }

  update(asignatura:Asignatura): Promise<any>{
  	return this.asignatura(asignatura.id).update(Object.assign({},asignatura));
  }

  delete(id): Promise<any> {
  	return this.asignatura(id).delete();
  }

}