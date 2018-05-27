import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import {Alumno} from "../../alumno";
import {ErrorStateMatcher} from "@angular/material";
import {FormBuilder, FormControl, FormGroup,FormGroupDirective, NgForm, Validators} from "@angular/forms";

export class AlumnoErrorStateMatcher implements ErrorStateMatcher{
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean{
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty ||control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css']
})
export class AlumnoFormComponent implements OnInit {

  @Output() onSubmit= new EventEmitter<any>();
  @Input() alumno:Alumno;
  @Input() btnBtn: string;

  alumnoForm: FormGroup;
  nameFormControl: FormControl;
  genderFormControl: FormControl;
  ageFormControl: FormControl;
  photoFormControl: FormControl;
 
  matcher=new AlumnoErrorStateMatcher;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.nameFormControl=new FormControl(this.alumno.name,[
      Validators.required
    ]);

    this.genderFormControl=new FormControl(this.alumno.gender,[
      Validators.required
    ]);

    this.ageFormControl=new FormControl(this.alumno.age,[
      Validators.required
    ]);

    /*this.photoFormControl=new FormControl(this.alumno.photo,[
      Validators.required
    ]);*/

    this.alumnoForm=this.fb.group({
      name:this.nameFormControl,
      gender: this.genderFormControl,
      age:this.ageFormControl
     // photo:this.photoFormControl
    });

  }

  process(){
    this.onSubmit.emit(this.alumno);
  }
}

