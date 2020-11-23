import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectoFisicoComponent } from './aspecto-fisico.component';

describe('AspectoFisicoComponent', () => {
  let component: AspectoFisicoComponent;
  let fixture: ComponentFixture<AspectoFisicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspectoFisicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspectoFisicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
