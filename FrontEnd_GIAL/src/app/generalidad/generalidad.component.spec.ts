import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralidadComponent } from './generalidad.component';

describe('GeneralidadComponent', () => {
  let component: GeneralidadComponent;
  let fixture: ComponentFixture<GeneralidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
