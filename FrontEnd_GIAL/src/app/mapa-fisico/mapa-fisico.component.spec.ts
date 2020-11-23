import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaFisicoComponent } from './mapa-fisico.component';

describe('MapaFisicoComponent', () => {
  let component: MapaFisicoComponent;
  let fixture: ComponentFixture<MapaFisicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaFisicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaFisicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
