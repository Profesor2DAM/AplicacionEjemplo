import { Component, OnInit, ViewChild } from '@angular/core';
import {AlumnoService} from "../alumno.service";
import {MatPaginator, MatSort,MatTableDataSource} from "@angular/material";
import {SnackService} from "../snack.service";
import {Title} from "@angular/platform-browser";
import {Alumno} from "../../alumno";

@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.css']
})
export class AlumnoListComponent implements OnInit {
	displayedColumns=['id','name','gender','age','photo','subjects','edit','delete'];
	dataSource: MatTableDataSource<any>;
	@ViewChild(MatSort) sort:MatSort;
	@ViewChild(MatPaginator) paginator:MatPaginator;

  constructor(
  	private alumnoService: AlumnoService,
  	private snackService: SnackService,
  	private titleService: Title
  	) { 
  		this.alumnoService.alumnos().valueChanges().subscribe(
  			data => {
  				this.dataSource=new MatTableDataSource(data);
  				this.dataSource.paginator=this.paginator;
  				this.dataSource.sort=this.sort;
  			},
  			err => {
  				this.snackService.launch(err,'Cerrar',4000);
  			}
  			)
  	}

  trackById(index, alumno: Alumno)
  {
  	return alumno.id;
  }

  applyFilter(value: string){
  	value=value.trim();
  	value=value.toLowerCase();
  	this.dataSource.filter=value;
  }

  ngOnInit() {
  }

  remove(id){
	//Eliminaremos el alumno pulsado
	this.alumnoService.delete(id).then(()=>{
		this.snackService.launch('Alumno eliminado correctamente','Cerrar',5000);
	})
}

}
