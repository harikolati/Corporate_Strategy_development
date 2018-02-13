import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {NewInterface} from '../new-interface'
@Injectable()
export class SearchboxService {

  constructor(private http: Http) { }

  getDeals(): Observable<NewInterface[]>{
    return this.http.get('assets/data/searchbox.json')
      .map((response: Response) =>{
        return <NewInterface[]>response.json();
      })
        .catch(this.handleError);
  
  }
  private handleError (error:Response){
    return Observable.throw(error.statusText);
}
}
