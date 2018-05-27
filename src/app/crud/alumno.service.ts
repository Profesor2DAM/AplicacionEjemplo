import { Injectable } from '@angular/core';
import {Alumno} from "../alumno";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import * as faker from 'faker';

type alumnosCollection = AngularFirestoreCollection<Alumno[]>;
type alumnoDocument = AngularFirestoreDocument<Alumno>;

@Injectable()
export class AlumnoService {

  constructor(
  	private afs: AngularFirestore) {
  
  }

  alumnos(): alumnosCollection{
  	return this.afs.collection<Alumno[]>('alumnos');
  }

  alumno(id: string | number): alumnoDocument{
  	return this.afs.doc<Alumno>(`alumnos/${id}`);
  }

  save(alumno: Alumno): Promise<any>{
  	alumno.id=faker.random.alphaNumeric(16);
  	return this.alumnos().doc(alumno.id).set(Object.assign({},alumno));
  }

  update(alumno:Alumno): Promise<any>{
  	return this.alumno(alumno.id).update(Object.assign({},alumno));
  }

  delete(id): Promise<any> {
  	return this.alumno(id).delete();
  }

}
