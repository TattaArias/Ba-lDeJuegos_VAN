import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaltoDelAngelComponent } from './salto-del-angel.component';

describe('SaltoDelAngelComponent', () => {
  let component: SaltoDelAngelComponent;
  let fixture: ComponentFixture<SaltoDelAngelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaltoDelAngelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaltoDelAngelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
