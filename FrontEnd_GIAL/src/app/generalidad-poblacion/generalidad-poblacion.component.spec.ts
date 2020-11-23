import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralidadPoblacionComponent } from './generalidad-poblacion.component';

describe('GeneralidadPoblacionComponent', () => {
  let component: GeneralidadPoblacionComponent;
  let fixture: ComponentFixture<GeneralidadPoblacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralidadPoblacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralidadPoblacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
