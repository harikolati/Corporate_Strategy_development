import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA }          from '@angular/core';
import { AllDealsComponent } from './all-deals.component';
import { HttpClientModule } from '@angular/common/http';
import { DealService } from '../services/deal.service';
import { HttpModule } from '@angular/http';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
describe('AllDealsComponent', () => {
  let component: AllDealsComponent;
  let fixture: ComponentFixture<AllDealsComponent>;
	let debugElement:DebugElement;
  let htmlElement:HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllDealsComponent],
      imports: [HttpModule],
      providers:[DealService],
      schemas:      [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDealsComponent);
    component = fixture.componentInstance;
	debugElement = fixture.debugElement.query(By.css('span'));
    htmlElement= debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Active Deals',()=>{
    expect(htmlElement.textContent).toContain('ALL DEALS(');
  });
  it('should display dropdown value',()=>{
 debugElement = fixture.debugElement.query(By.css('a.fontsmall'));
    expect(debugElement.nativeElement.textContent).toContain('Edit');
  });
});