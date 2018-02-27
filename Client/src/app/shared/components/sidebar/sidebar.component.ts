import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }
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
