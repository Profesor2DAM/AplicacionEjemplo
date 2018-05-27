import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoAddComponent } from './alumno-add.component';

describe('AlumnoAddComponent', () => {
  let component: AlumnoAddComponent;
  let fixture: ComponentFixture<AlumnoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
