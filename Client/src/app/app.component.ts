import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  
  showDropDown=false;
  toggleright=true;
  toggleDropDown(){
    this.showDropDown=!this.showDropDown;
    this.toggleright=!this.toggleright;
  }
  toolClick(){
    this.showDropDown=true;
  }

}
