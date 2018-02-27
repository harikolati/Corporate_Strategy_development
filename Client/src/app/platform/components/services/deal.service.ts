import { Deal } from './Deal';
import { Http, Response, Headers } from "@angular/http";
import { Injectable} from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class DealService{

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
