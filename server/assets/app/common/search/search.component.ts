import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  showDropDown=false;
  deals=[{
    'title':'DEAL TYPE TITLE',
    'Items':['Deal Type Title','Deal Type Title','Deal Type Title']},
    {
      'title':'LOCATION',
      'Items':['Location Title','Location Title','Location Title']},
      {
        'title':'ARCHETYPE',
        'Items':['Archetype Title','Archetype Title','Archetype Title']}
  ]
  constructor() { }
  toggleDropDown(){
    this.showDropDown=!this.showDropDown;
  }
  }
