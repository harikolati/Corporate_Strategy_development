import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateUploadDownloadComponent } from './template-upload-download.component';

describe('TemplateUploadDownloadComponent', () => {
  let component: TemplateUploadDownloadComponent;
  let fixture: ComponentFixture<TemplateUploadDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateUploadDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateUploadDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
