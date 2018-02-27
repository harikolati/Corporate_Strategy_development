import { Component, OnInit , Inject} from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

  public newsfeed=[];
  constructor(@Inject('Configuration') private Config) { }

  ngOnInit():void {
 this.news();
  }
news()
{
  this.newsfeed=this.Config;
}
}

