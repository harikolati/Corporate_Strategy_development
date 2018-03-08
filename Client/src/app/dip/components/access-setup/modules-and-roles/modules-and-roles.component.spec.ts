import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulesAndRolesComponent } from './modules-and-roles.component';

describe('CompanyAndRolesComponent', () => {
  let component: ModulesAndRolesComponent;
  let fixture: ComponentFixture<ModulesAndRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulesAndRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulesAndRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});