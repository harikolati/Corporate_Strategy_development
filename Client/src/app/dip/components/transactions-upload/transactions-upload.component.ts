import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {DataAccessService} from "../access-setup/data-access.service";
import {TransactionsService} from "./transactions.service";
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";

@Component({
    selector: 'app-transactions-upload',
    templateUrl: './transactions-upload.component.html',
    styleUrls: ['./transactions-upload.component.scss']
})
export class TransactionsUploadComponent implements OnInit {
    _navOpened: boolean = true;
    newTransactionVisible:boolean = false;
    transactionsData:any = [];


    constructor(private route:ActivatedRoute,private router:Router,private dataAccessservice: DataAccessService, private transactionsService:TransactionsService) {
    }

    ngOnInit() {
        this.getTransactionsData();
        this.transactionsService.getTransactions().subscribe(data => {
            this.transactionsData = data;
        })
    }
    navigateToTransactionDetails(transaction){
        this.transactionsService.setSelectedTransaction(transaction)
        this.router.navigate(['view-transaction']);
    }
    navigateToNewTransaction() {
        this.toggleSideNav();
        this.router.navigate(['new-transaction'], {relativeTo:this.route})
    }
    toggleSideNav() {
        this._navOpened = !this._navOpened;
    }
    getTransactionsData(){
        this.transactionsService.getAllTransactions();
    }

}
