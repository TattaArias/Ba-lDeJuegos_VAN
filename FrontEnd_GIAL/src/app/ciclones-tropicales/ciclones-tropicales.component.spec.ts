import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiclonesTropicalesComponent } from './ciclones-tropicales.component';

describe('CiclonesTropicalesComponent', () => {
  let component: CiclonesTropicalesComponent;
  let fixture: ComponentFixture<CiclonesTropicalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiclonesTropicalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiclonesTropicalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
