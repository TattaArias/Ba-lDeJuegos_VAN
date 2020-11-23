import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomiaComponent } from './economia.component';

describe('EconomiaComponent', () => {
  let component: EconomiaComponent;
  let fixture: ComponentFixture<EconomiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
