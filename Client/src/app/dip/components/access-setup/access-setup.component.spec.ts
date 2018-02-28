import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessSetupComponent } from './access-setup.component';

describe('AccessSetupComponent', () => {
  let component: AccessSetupComponent;
  let fixture: ComponentFixture<AccessSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
