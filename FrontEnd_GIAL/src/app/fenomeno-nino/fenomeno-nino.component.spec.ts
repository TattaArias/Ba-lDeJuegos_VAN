import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FenomenoNinoComponent } from './fenomeno-nino.component';

describe('FenomenoNinoComponent', () => {
  let component: FenomenoNinoComponent;
  let fixture: ComponentFixture<FenomenoNinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FenomenoNinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FenomenoNinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
