import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordenadasGeograficasComponent } from './coordenadas-geograficas.component';

describe('CoordenadasGeograficasComponent', () => {
  let component: CoordenadasGeograficasComponent;
  let fixture: ComponentFixture<CoordenadasGeograficasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordenadasGeograficasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordenadasGeograficasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
