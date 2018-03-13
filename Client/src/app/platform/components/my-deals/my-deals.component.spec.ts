import { async, ComponentFixture, tick,fakeAsync, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA }          from '@angular/core';
import { MyDealsComponent } from './my-deals.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { DealService } from '../services/deal.service';
import { HttpModule } from '@angular/http';
import { DebugElement } from '@angular/core';
import { Deal } from '../services/Deal';
import { By } from '@angular/platform-browser';
import { DebugContext } from '@angular/core/src/view';
import { HttpClient,HttpHandler } from '@angular/common/http';
describe('MyDealsComponent', () => {
  let component: MyDealsComponent;
  let fixture: ComponentFixture<MyDealsComponent>;
  let debugElement:DebugElement;
  let htmlElement:HTMLElement;
  let activeDeals : Deal[];
  let btnclick :DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDealsComponent ],
      imports: [NgxPaginationModule,HttpModule],
     
      providers:[DealService,HttpClient,HttpHandler],
      schemas:      [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDealsComponent);
    component = fixture.componentInstance;
/*     debugElement = fixture.debugElement.query(By.css('span'));
    htmlElement= debugElement.nativeElement; */
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 /*  it('should create showCompletedDealsFlg', () => {
    expect(component).toBeTruthy();
  });
  it('Active Deals',()=>{
    expect(htmlElement.textContent).toContain('ACTIVE DEALS(');
  });

 it("check for not true or false",()=>{
component.showCompletedDealsFlg=true;

if(component.showCompletedDealsFlg){
  expect(fixture.nativeElement.querySelector('#showCompletedTemplate')).toBeTruthy;
  expect(fixture.nativeElement.querySelector('#showOnHoldTemplate')).toBeFalsy;
}

}); 
it('should display dropdown value',()=>{
 
  debugElement = fixture.debugElement.query(By.css('a.fontsmall'));
    expect(debugElement.nativeElement.textContent).toContain('Edit');
  
  }); */
 
    }); 
   
