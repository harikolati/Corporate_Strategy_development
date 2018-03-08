import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {globalObject} from "../dip-shared/globalObject";
import {DipInitializerService} from "../dip-shared/dip-initializer.service";

@Injectable()
export class DataAccessService {
    constructor(private router: Router, private _http: HttpClient, private dipInitializer:DipInitializerService) {
    }

    getAllModules() {
        let _searchUrl = globalObject.baseUrl + '/access/getallmodules';
        return this._http.get(_searchUrl, this.dipInitializer.serviceHeaders)
    }
    deleteModule(modules){
        /*const param =  new HttpParams({
            fromObject: {
                module: moduleName
            }
        });*/
        let _searchUrl = globalObject.baseUrl + '/access/deletemodule';
        return this._http.post(_searchUrl, modules, this.dipInitializer.serviceHeaders);
    }
    saveModule(data){
        let _searchUrl = globalObject.baseUrl + '/access/savemodule';
        return this._http.post(_searchUrl,data, this.dipInitializer.serviceHeaders);
    }
    getAllRoles() {
        let _searchUrl = globalObject.baseUrl + '/access/getallroles';
        return this._http.get(_searchUrl, this.dipInitializer.serviceHeaders)
    }
    deleteRoles(roleName){
        let _searchUrl = globalObject.baseUrl + '/access/deleterole';
        return this._http.post(_searchUrl, roleName, this.dipInitializer.serviceHeaders);
    }
    saveRoles(data){
        let _searchUrl = globalObject.baseUrl + '/access/saverole';
        return this._http.post(_searchUrl,data, this.dipInitializer.serviceHeaders);
    }
    getAllUserAccess() {
        let _searchUrl = globalObject.baseUrl + '/access/getuseraccess?remoteuser=saangapp';
        return this._http.get(_searchUrl, this.dipInitializer.serviceHeaders)
    }
    getAllCompany() {
        let _searchUrl = globalObject.baseUrl + '/acquisitions/getacquisitions?acquisitions=';
        return this._http.get(_searchUrl, this.dipInitializer.serviceHeaders)
    }
    saveUserAccess(data){
        let _searchUrl = globalObject.baseUrl + '/access/saveuseraccess';
        return this._http.post(_searchUrl,data, this.dipInitializer.serviceHeaders);
    }

}
