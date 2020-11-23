import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EfectoInvernaderoComponent } from './efecto-invernadero.component';

describe('EfectoInvernaderoComponent', () => {
  let component: EfectoInvernaderoComponent;
  let fixture: ComponentFixture<EfectoInvernaderoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EfectoInvernaderoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EfectoInvernaderoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
