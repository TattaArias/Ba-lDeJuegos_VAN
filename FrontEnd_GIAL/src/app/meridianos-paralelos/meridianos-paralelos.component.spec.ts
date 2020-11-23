import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeridianosParalelosComponent } from './meridianos-paralelos.component';

describe('MeridianosParalelosComponent', () => {
  let component: MeridianosParalelosComponent;
  let fixture: ComponentFixture<MeridianosParalelosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeridianosParalelosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeridianosParalelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
