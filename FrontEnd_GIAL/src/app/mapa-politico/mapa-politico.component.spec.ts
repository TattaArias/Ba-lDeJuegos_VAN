import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaPoliticoComponent } from './mapa-politico.component';

describe('MapaPoliticoComponent', () => {
  let component: MapaPoliticoComponent;
  let fixture: ComponentFixture<MapaPoliticoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaPoliticoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaPoliticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
