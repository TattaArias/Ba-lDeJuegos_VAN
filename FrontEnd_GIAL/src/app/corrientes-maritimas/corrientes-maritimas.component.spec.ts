import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrientesMaritimasComponent } from './corrientes-maritimas.component';

describe('CorrientesMaritimasComponent', () => {
  let component: CorrientesMaritimasComponent;
  let fixture: ComponentFixture<CorrientesMaritimasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrientesMaritimasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrientesMaritimasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
