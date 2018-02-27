import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearninganddevelopmentComponent } from './learninganddevelopment.component';

describe('LearninganddevelopmentComponent', () => {
  let component: LearninganddevelopmentComponent;
  let fixture: ComponentFixture<LearninganddevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearninganddevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearninganddevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
