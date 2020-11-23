import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanalPanamaComponent } from './canal-panama.component';

describe('CanalPanamaComponent', () => {
  let component: CanalPanamaComponent;
  let fixture: ComponentFixture<CanalPanamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanalPanamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanalPanamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
