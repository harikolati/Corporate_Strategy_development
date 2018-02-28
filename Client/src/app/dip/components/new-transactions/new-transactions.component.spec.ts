import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTransactionsComponent } from './new-transactions.component';

describe('NewTransactionsComponent', () => {
  let component: NewTransactionsComponent;
  let fixture: ComponentFixture<NewTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
