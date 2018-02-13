import { Component, ViewChild } from '@angular/core';
import { SearchboxService } from '../services/searchbox.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {NewInterface} from '../new-interface';
import { Http } from '@angular/http';
import { Pipe,PipeTransform} from '@angular/core';
import {FilterPipe} from "../filter.pipe";
import { FormBuilder,FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss'],
  
  providers: [SearchboxService]
 
  
})

export class SearchboxComponent implements OnInit{

showDropDown=false;
searchForm:FormGroup;
 items: NewInterface[];
  constructor(private _searchService : SearchboxService) {
   
    }
  toggleDropDown(){
    this.showDropDown=!this.showDropDown;
  }
  getDeals():void{
    this._searchService.getDeals()
                        .subscribe(resultArray=>this.items=resultArray,
                        error=>console.log("Error ::"+error))
  }
  ngOnInit():void{
    this.getDeals();
   
  }
  
 

  getSearchValue(){
    return this._searchService;  }

   
  }
  