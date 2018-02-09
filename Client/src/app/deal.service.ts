import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Deal } from './deal';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DealService {

  private _url: string = "/assets/data/activeDealInfo.json"; 
  
    constructor(private http:HttpClient) { }

    getDealDetails(): Observable<Deal[]>{
  
      return this.http.get<Deal[]>(this._url)  
                      .catch(this.errorHandler);
  
    }
    errorHandler(error: HttpErrorResponse){  
      return Observable.throw(error.message || "Server Error");  
    }
  
  
  }