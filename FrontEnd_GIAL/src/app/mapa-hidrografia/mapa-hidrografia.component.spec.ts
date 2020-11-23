import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaHidrografiaComponent } from './mapa-hidrografia.component';

describe('MapaHidrografiaComponent', () => {
  let component: MapaHidrografiaComponent;
  let fixture: ComponentFixture<MapaHidrografiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaHidrografiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaHidrografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
