import { Component, OnInit, ViewChild } from '@angular/core';
import {AsignaturaService} from "../asignatura.service";
import {MatPaginator, MatSort,MatTableDataSource} from "@angular/material";
import {SnackService} from "../snack.service";
import {Title} from "@angular/platform-browser";
import {Asignatura} from "../../asignatura";

@Component({
  selector: 'app-asignatura-list',
  templateUrl: './asignatura-list.component.html',
  styleUrls: ['./asignatura-list.component.css']
})
export class AsignaturaListComponent implements OnInit {
	displayedColumns=['id','name','hours','edit','delete'];
	dataSource: MatTableDataSource<any>;
	@ViewChild(MatSort) sort:MatSort;
	@ViewChild(MatPaginator) paginator:MatPaginator;

  constructor(
  	private asignaturaService: AsignaturaService,
  	private snackService: SnackService,
  	private titleService: Title
  	) { 
  		this.asignaturaService.asignaturas().valueChanges().subscribe(
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

  trackById(index, asignatura: Asignatura)
  {
  	return asignatura.id;
  }

  applyFilter(value: string){
  	value=value.trim();
  	value=value.toLowerCase();
  	this.dataSource.filter=value;
  }

  ngOnInit() {
  	this.titleService.setTitle('Listado de Asignaturas');
  }

 	remove(asignatura) {
    this.asignaturaService.delete(asignatura.id).then(() => {
      this.snackService.launch('Asignatura eliminada correctamente', 'Cerrar', 5000);
    })
  }

}
