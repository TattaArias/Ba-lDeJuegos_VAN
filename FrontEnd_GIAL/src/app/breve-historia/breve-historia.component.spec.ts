import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreveHistoriaComponent } from './breve-historia.component';

describe('BreveHistoriaComponent', () => {
  let component: BreveHistoriaComponent;
  let fixture: ComponentFixture<BreveHistoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreveHistoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreveHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
