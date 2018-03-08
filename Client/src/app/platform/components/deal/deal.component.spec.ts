import { async,fakeAsync, ComponentFixture, getTestBed,TestBed } from '@angular/core/testing';
import { DealComponent } from './deal.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Deal } from '../services/Deal';
import { DealService } from '../services/deal.service';
import { HttpModule } from '@angular/http';
import { NO_ERRORS_SCHEMA }          from '@angular/core';
//import { Pastebin, Languages } from './pastebin';

describe('DealComponent', () => {
  let component: DealComponent;
  let fixture: ComponentFixture<DealComponent>;
  let debugElement:DebugElement;
  let htmlElement:HTMLElement;
  let deal : Deal;
  let testService : DealService;
 // let dealtypeInfo :Deal;
  let responsePropertyNames;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
      declarations: [ DealComponent ],
      imports: [HttpModule],
      providers: [DealService],
     schemas:      [ NO_ERRORS_SCHEMA ]
   
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealComponent);
    component = fixture.componentInstance;    
    
   

    debugElement = fixture.debugElement.query(By.css('button'));
    htmlElement= debugElement.nativeElement;
    testService= TestBed.get(DealService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display button',()=>{
    let button1 =component.btnDNAText;
    let button2 = component.btnDetailsText;
    
    expect(button1).toContain('View Deal DNA');
    expect(button2).toContain('View Deal Details');

  });
  
  it('should display dropdown based on deals', () => {
 // fixture.debugElement.query(By.css('div'));
  //  testService = fixture.debugElement.injector.get(DealService);
  //  testService = TestBed.get(DealService);
    let content= new Deal('ACQ','Legal Close','Panthers','Software',['xxx'],['Perspica'],'Product','Undisclosed','AppDynamics','active')
  if(expect(content.dealtypeInfo).toMatch('active')){
  expect(fixture.nativeElement.querySelector('#activeDropdownTemp')).toBe(true);
  expect(fixture.nativeElement.querySelector('#followedDropdownTemp')).toBe(false);
  expect(fixture.nativeElement.querySelector('#followedDropdownTemp')).toBe(false);}
   else if( expect(content.dealtypeInfo).not.toMatch('follow')){
    expect(fixture.nativeElement.querySelector('#activeDropdownTemp')).toBe(false);
   }
});

it('should display dropdown value',()=>{
 let flag= fixture.nativeElement.querySelector('#activeDropdownTemp');
 flag=true;
  if(expect(flag).toBeTruthy()){
    fixture.nativeElement.querySelector('a.fontsmall').textContent.toMatch('assign');
  }
  else if(expect(!flag).toBeFalsy())
  {
    fixture.nativeElement.querySelector('a.fontsmall').textContent.toMatch('unfollow');
  }
  else if(fixture.nativeElement.querySelector('#allDealsDropdownTemp')){
    fixture.nativeElement.querySelector('a.fontsmall').textContent.toMatch('follow');
  }
  
});
});
