import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineFieldsModalComponent } from './define-fields-modal.component';

describe('DefineFieldsModalComponent', () => {
  let component: DefineFieldsModalComponent;
  let fixture: ComponentFixture<DefineFieldsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefineFieldsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineFieldsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
