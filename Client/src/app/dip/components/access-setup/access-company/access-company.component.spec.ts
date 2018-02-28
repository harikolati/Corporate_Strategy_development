import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessCompanyComponent } from './access-company.component';

describe('AccessCompanyComponent', () => {
  let component: AccessCompanyComponent;
  let fixture: ComponentFixture<AccessCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
