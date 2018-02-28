import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAndRolesComponent } from './modules-and-roles.component';

describe('CompanyAndRolesComponent', () => {
  let component: CompanyAndRolesComponent;
  let fixture: ComponentFixture<CompanyAndRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAndRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAndRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
