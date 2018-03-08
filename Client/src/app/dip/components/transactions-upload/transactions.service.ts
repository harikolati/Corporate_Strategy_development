import {EventEmitter, Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {globalObject} from "../dip-shared/globalObject";
import {DipInitializerService} from "../dip-shared/dip-initializer.service";

@Injectable()
export class TransactionsService {
    transactionList:Array<any>;
    receivedTransactionList:EventEmitter<any> = new EventEmitter();
    transactionSelected:EventEmitter<any> = new EventEmitter();
    constructor(private router: Router, private _http: HttpClient, private dipInitializer:DipInitializerService) {
    }

    getAllTransactions() {
        let _searchUrl = globalObject.baseUrl + '/acquisitions/getacquisitions?acquisitions=';
        this._http.get(_searchUrl, this.dipInitializer.serviceHeaders).subscribe((data:any)=> {
            this.transactionList = data;
            this.receivedTransactionList.next(data);
        })
    }

    getTransactions(){
        return this.receivedTransactionList;
    }

    setSelectedTransaction(data){
        this.transactionSelected.next(data);
    }

    getSelectedTransaction(){
        return this.transactionSelected;
    }


}
