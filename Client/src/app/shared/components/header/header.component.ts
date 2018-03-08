import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../platform/components/services/data.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
/**
 * @class: HeaderComponent
 * To display the header content
 */
export class HeaderComponent implements OnInit {

  public userId;
  showDropDown=false;
  constructor(private _dataService : DataService,private router: Router) { }

  ngOnInit() {    
    this.getUserId();       
}//end ng()

getUserId() {
  this._dataService.getUserId().subscribe(data => {
      this.userId =  data;
     
  })
}
onLogout() {
  //this.router.navigate(['logout'])
  window.location.href=environment.logoutUrl;
  
}
 DropDown(){
    this.showDropDown=!this.showDropDown;}


 
}//end comp
