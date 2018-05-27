import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AlumnoListComponent} from "./alumno-list/alumno-list.component";
import {AsignaturaListComponent} from "./asignatura-list/asignatura-list.component";
import { AlumnoAddComponent } from './alumno-add/alumno-add.component';
import { AsignaturaAddComponent } from './asignatura-add/asignatura-add.component';

const routes: Routes = [
	{path:'alumnos', component: AlumnoListComponent},
	{path:'asignaturas',component:AsignaturaListComponent},
	{path:'alumnos/add',component:AlumnoAddComponent},
	{path:'asignaturas/add',component:AsignaturaAddComponent},
	];
	

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
