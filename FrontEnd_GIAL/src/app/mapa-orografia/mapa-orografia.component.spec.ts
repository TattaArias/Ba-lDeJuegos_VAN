import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaOrografiaComponent } from './mapa-orografia.component';

describe('MapaOrografiaComponent', () => {
  let component: MapaOrografiaComponent;
  let fixture: ComponentFixture<MapaOrografiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaOrografiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaOrografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
