import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacasTectonicasComponent } from './placas-tectonicas.component';

describe('PlacasTectonicasComponent', () => {
  let component: PlacasTectonicasComponent;
  let fixture: ComponentFixture<PlacasTectonicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacasTectonicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacasTectonicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
