import { Component, OnInit , Inject} from '@angular/core';
import { Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

  public newsfeed;
  @Output() pleaseDeleteMeEvent = new EventEmitter();
  constructor(@Inject('Configuration') private Config) { }

  ngOnInit():void {
 this.news();
  }
news()
{
  this.newsfeed=this.Config;
}
destroy() : void{
  this.pleaseDeleteMeEvent.emit();
}
}