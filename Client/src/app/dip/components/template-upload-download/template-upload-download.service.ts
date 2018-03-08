import { Http, Response } from '@angular/http';
import {EventEmitter, Injectable} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import {globalObject} from "../dip-shared/globalObject"
import {DipInitializerService} from "../dip-shared/dip-initializer.service";

@Injectable()
export class TemplateUploadDownloadService {
    onFlexFieldSave:EventEmitter<any> = new EventEmitter();
    constructor(private _http: HttpClient, private dipInitializer: DipInitializerService) {
    }

    getTemplate() {
        let url = "https://edna.cisco.com/request/getDommtaggingExcelFile/119845"
        return this._http.get(url).map((res: Response) => res).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    uploadFile(formData) {
        let url = globalObject.baseUrl + '/uploadfile';
        let headers = this.dipInitializer.serviceHeaders;
        //headers.headers.delete('Content-Type');
        console.log(headers);
        const req = new HttpRequest('POST', url, formData, headers)
        return this._http.request(req);
        /*return this._http.post(url, formData, headers).map(event => {
            console.log(event);
        });*/
    }

    getFlexFields(moduleName, transactionName){
        let params = new HttpParams();
        params = params.append('modulename', moduleName.toUpperCase());
        params = params.append('transactionname', transactionName.toUpperCase());
        let _searchUrl = globalObject.baseUrl + '/acquisitions/getflexfields'
        let options = this.dipInitializer.serviceHeaders;
        options.params = params;
        return this._http.get(_searchUrl, options);
    }

    saveFlexFields(form){
        let url = globalObject.baseUrl + "/acquisitions/saveflexfields"
        return this._http.post(url,form, this.dipInitializer.serviceHeaders).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    setFlexFieldSaved(data){
        this.onFlexFieldSave.next(data)
    }

    getFlexFieldEvents(){
        return this.onFlexFieldSave;
    }


}
