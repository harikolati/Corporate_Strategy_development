import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {URLSearchParams} from "@angular/http";

@Injectable()
export class DipInitializerService {
  serviceHeaders:any = {};
  tokenInfo:any;
  constructor(private _http: HttpClient) {}

  getTokenInfo(): Promise<any> {
      let _searchUrl = 'https://cloudsso-test.cisco.com/as/token.oauth2';
      let options = {
          headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
          withCredentials:false
      };
      let body = new HttpParams()
        .append('client_id', 'dipupload1')
        .append('client_secret', 'MTUxODc5OTM5NDc0MQ==')
        .append('grant_type', 'client_credentials')
      /*let data = {
          "client_id": "dipupload",
          "client_secret": "MTUxODEyNDM3MjE4OA==",
          "grant_type": "client_credentials"
      }*/
      let observable = this._http.post(_searchUrl,body , options)
          .map((res:Response) => res).toPromise();
      observable.then(data => {
          this.tokenInfo = data;
          this.serviceHeaders = {
              headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.tokenInfo.access_token).set("content-type", "application/json"),
          };
          console.log(this.serviceHeaders);
      })
      return observable;
  }

}
