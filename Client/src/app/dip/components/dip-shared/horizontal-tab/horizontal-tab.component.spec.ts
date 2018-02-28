import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalTabComponent } from './horizontal-tab.component';

describe('HorizontalTabComponent', () => {
  let component: HorizontalTabComponent;
  let fixture: ComponentFixture<HorizontalTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
