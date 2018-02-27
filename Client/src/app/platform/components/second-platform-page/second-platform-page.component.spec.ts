import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPlatformPageComponent } from './second-platform-page.component';

describe('SecondPlatformPageComponent', () => {
  let component: SecondPlatformPageComponent;
  let fixture: ComponentFixture<SecondPlatformPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondPlatformPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPlatformPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
