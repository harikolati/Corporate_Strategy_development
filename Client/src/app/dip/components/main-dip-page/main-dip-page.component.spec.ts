import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDipPageComponent } from './main-dip-page.component';

describe('MainDipPageComponent', () => {
  let component: MainDipPageComponent;
  let fixture: ComponentFixture<MainDipPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainDipPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
