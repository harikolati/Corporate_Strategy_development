import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let debugElement:DebugElement;
  let htmlElement:HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('h3'));
    htmlElement= debugElement.nativeElement;
  });

  it('should display title',()=>{
    expect(htmlElement.textContent).toEqual('One CSO');
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
