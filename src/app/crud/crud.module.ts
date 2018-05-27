import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import {SharedModule} from '../shared/shared.module';
import { SnackService } from './snack.service';
import { AlumnoService } from './alumno.service';
import { AsignaturaService } from './asignatura.service';
import { AlumnoListComponent } from './alumno-list/alumno-list.component';
import { AngularFirestoreModule} from "angularfire2/firestore";
import { AsignaturaListComponent } from './asignatura-list/asignatura-list.component';
import { MatPaginatorIntl } from '@angular/material';
import { AlumnosPaginatorIntl } from './alumnos-paginator-intl';
import { AlumnoFormComponent } from './alumno-form/alumno-form.component';
import { AsignaturaFormComponent } from './asignatura-form/asignatura-form.component';
import { AlumnoAddComponent } from './alumno-add/alumno-add.component';
import { AsignaturaAddComponent } from './asignatura-add/asignatura-add.component';


@NgModule({
  imports: [
    CommonModule,
    CrudRoutingModule,
    SharedModule,
    AngularFirestoreModule
  ],
  declarations: [AlumnoListComponent, AsignaturaListComponent, AlumnoFormComponent, AsignaturaFormComponent, AlumnoAddComponent, AsignaturaAddComponent],
  providers: 
  [SnackService, 
    AlumnoService, 
    AsignaturaService,
  {provide: MatPaginatorIntl, useClass: AlumnosPaginatorIntl}
  ]
})
export class CrudModule { }
