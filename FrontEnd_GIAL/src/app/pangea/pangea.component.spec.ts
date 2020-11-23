import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PangeaComponent } from './pangea.component';

describe('PangeaComponent', () => {
  let component: PangeaComponent;
  let fixture: ComponentFixture<PangeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PangeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PangeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
