import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import {Asignatura} from "../../asignatura";
import {ErrorStateMatcher} from "@angular/material";
import {FormBuilder, FormControl, FormGroup,FormGroupDirective, NgForm, Validators} from "@angular/forms";

export class AsignaturaErrorStateMatcher implements ErrorStateMatcher{
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean{
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty ||control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-asignatura-form',
  templateUrl: './asignatura-form.component.html',
  styleUrls: ['./asignatura-form.component.css']
})
export class AsignaturaFormComponent implements OnInit {

  @Output() onSubmit= new EventEmitter<any>();
  @Input() asignatura:Asignatura;
  @Input() btnBtn: string;

  asignaturaForm: FormGroup;
  nameFormControl: FormControl;
  hoursFormControl: FormControl;

  matcher=new AsignaturaErrorStateMatcher;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.nameFormControl=new FormControl(this.asignatura.name,[
      Validators.required
    ]);

    this.hoursFormControl=new FormControl(this.asignatura.hours,[
      Validators.required
    ]);

    this.asignaturaForm=this.fb.group({
      name:this.nameFormControl,
      hours: this.hoursFormControl
    });

  }

  process(){
    this.onSubmit.emit(this.asignatura);
  }
}
