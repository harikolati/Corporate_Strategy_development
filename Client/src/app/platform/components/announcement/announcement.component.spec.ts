import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { AnnouncementComponent } from './announcement.component';
import { Configuration } from '../../../../App.Config';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
describe('AnnouncementComponent', () => {
  let component: AnnouncementComponent;
  let fixture: ComponentFixture<AnnouncementComponent>;
  let debugElement:DebugElement;
  let htmlElement:HTMLElement;
  let expectMatch = null;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncementComponent ],
      imports:[HttpModule],
      providers:[
        {provide : 'Configuration' , useValue: Configuration}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementComponent);
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