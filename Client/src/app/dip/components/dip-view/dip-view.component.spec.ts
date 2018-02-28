import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DipViewComponent } from './dip-view.component';

describe('DipViewComponent', () => {
  let component: DipViewComponent;
  let fixture: ComponentFixture<DipViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DipViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DipViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
