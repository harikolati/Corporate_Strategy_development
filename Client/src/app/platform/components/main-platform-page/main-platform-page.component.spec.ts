import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPlatformPageComponent } from './main-platform-page.component';

describe('MainPlatformPageComponent', () => {
  let component: MainPlatformPageComponent;
  let fixture: ComponentFixture<MainPlatformPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPlatformPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPlatformPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
