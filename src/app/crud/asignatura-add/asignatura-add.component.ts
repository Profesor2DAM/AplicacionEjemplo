import {Component, OnInit} from '@angular/core';
import {Asignatura} from "../../asignatura";
import {Router} from "@angular/router";
import {AsignaturaService} from "../asignatura.service";
import {SnackService} from "../snack.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-asignatura-add',
  templateUrl: './asignatura-add.component.html',
  styleUrls: ['./asignatura-add.component.css']
})
export class AsignaturaAddComponent implements OnInit {

  asignatura: Asignatura = new Asignatura;
  constructor(
    private router: Router,
    private asignaturaService: AsignaturaService,
    private snackService: SnackService,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Añadir una nueva asignatura');
  }

  saveAsignatura($event) {
    this.asignaturaService.save($event).then(() => {
      this.router.navigate(['/asignaturas']).then(() => {
        this.snackService.launch('Asignatura creada correctamente', 'Cerrar', 5000);
      })
    })
  }
}



