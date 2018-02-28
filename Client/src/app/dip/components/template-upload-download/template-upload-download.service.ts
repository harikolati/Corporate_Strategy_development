import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class TemplateUploadDownloadService {
  constructor(private _http: HttpClient) {
  }
  getTemplate() {
    let url = "https://edna.cisco.com/request/getDommtaggingExcelFile/119845"
      return this._http.get(url).map((res: Response) => res).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  saveTemplate(){
      let url = "http://hddev-c01-edge-03:8080/access/getallmodules"
      return this._http.get(url).map((res: Response) => res).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
