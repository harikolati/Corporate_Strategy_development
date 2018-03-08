import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';



@Injectable()
export class DataService {
  
  constructor(private _http: HttpClient) { }

  getUserId() {
    let _searchUrl = environment.apiBaseUrl+'/csohubbackend/getUserName';
    return this._http.get(_searchUrl);
  }
      
}

