import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesiertosComponent } from './desiertos.component';

describe('DesiertosComponent', () => {
  let component: DesiertosComponent;
  let fixture: ComponentFixture<DesiertosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesiertosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesiertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
