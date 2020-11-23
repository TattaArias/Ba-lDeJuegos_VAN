import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestruccionCapaDeOzonoComponent } from './destruccion-capa-de-ozono.component';

describe('DestruccionCapaDeOzonoComponent', () => {
  let component: DestruccionCapaDeOzonoComponent;
  let fixture: ComponentFixture<DestruccionCapaDeOzonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestruccionCapaDeOzonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestruccionCapaDeOzonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
