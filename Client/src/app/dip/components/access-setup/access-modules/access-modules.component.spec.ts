import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessModulesComponent } from './access-modules.component';

describe('AccessModulesComponent', () => {
  let component: AccessModulesComponent;
  let fixture: ComponentFixture<AccessModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
