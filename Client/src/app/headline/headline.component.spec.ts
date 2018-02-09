import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { HeadlineComponent } from './headline.component';
import { By } from '@angular/platform-browser';
describe('HeadlineComponent', () => {
  let component: HeadlineComponent;
  let fixture: ComponentFixture<HeadlineComponent>;
  let debugElement:DebugElement;
  let htmlElement:HTMLElement;
  let expectMatch = null;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('b'));
    htmlElement= debugElement.nativeElement;
    
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display title',()=>{
    expect(htmlElement.textContent).toMatch('Announcement Headline');
    
  });
 
  
});
