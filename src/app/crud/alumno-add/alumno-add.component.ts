import { Component, OnInit } from '@angular/core';
import { Alumno} from "../../alumno";
import {Router} from '@angular/router';
import {AlumnoService} from "../alumno.service";
import {SnackService} from "../snack.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-alumno-add',
  templateUrl: './alumno-add.component.html',
  styleUrls: ['./alumno-add.component.css']
})
export class AlumnoAddComponent implements OnInit {
 alumno: Alumno=new Alumno;
  constructor(
    private router: Router,
    private alumnoService: AlumnoService,
    private snackService: SnackService,
    private titleService: Title
  ){}
  ngOnInit() {
    this.titleService.setTitle('Añadir un nuevo alumno');
  }

  saveAlumno($event) {
    this.alumnoService.save($event).then(() => {
      this.router.navigate(['/alumnos']).then(() => {
        this.snackService.launch('Alumno creado correctamente', 'Cerrar', 5000);
      })
    })
  }
}


  

  


