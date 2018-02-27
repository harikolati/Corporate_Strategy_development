import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondDipPageComponent } from './second-dip-page.component';

describe('SecondDipPageComponent', () => {
  let component: SecondDipPageComponent;
  let fixture: ComponentFixture<SecondDipPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondDipPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondDipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
