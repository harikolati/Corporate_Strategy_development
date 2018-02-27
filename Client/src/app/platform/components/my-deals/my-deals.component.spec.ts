import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA }          from '@angular/core';
import { MyDealsComponent } from './my-deals.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { DealService } from '../services/deal.service';
import { HttpModule } from '@angular/http';
describe('MyDealsComponent', () => {
  let component: MyDealsComponent;
  let fixture: ComponentFixture<MyDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDealsComponent ],
      imports: [NgxPaginationModule,HttpModule],
     
      providers:[DealService],
      schemas:      [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDealsComponent);
    component = fixture.componentInstance;
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});