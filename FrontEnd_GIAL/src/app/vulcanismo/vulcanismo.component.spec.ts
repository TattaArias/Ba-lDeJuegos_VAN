import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VulcanismoComponent } from './vulcanismo.component';

describe('VulcanismoComponent', () => {
  let component: VulcanismoComponent;
  let fixture: ComponentFixture<VulcanismoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VulcanismoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VulcanismoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
