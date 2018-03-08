import {Component, Input, OnInit} from '@angular/core';
import {FormOptions} from "../form-options";
import {InputsRequired} from "../inputs-required";
import {ActivatedRoute, Params} from "@angular/router";
import {TransactionsService} from "../transactions.service";

@Component({
  selector: 'app-transactions-details',
  templateUrl: './transactions-details.component.html',
  styleUrls: ['./transactions-details.component.css']
})
export class TransactionsDetailsComponent implements OnInit {
  selectedTransaction:any;
  allTransactions:Array<any>;
  formOptions:FormOptions = {
      header:false,
      activeInactiveSwitch:true,
      inputWidth:'col-6',
      editMode:true,
      formExpand:true
  }
    inputsRequired:InputsRequired = {
        transactionName: false,
        transactionCode: false,
        transactionType: true,
        publicAnnounce:true,
        segment:true,
        addressOne:true,
        addressTwo:true,
        addressThree:true,
        city:true,
        county:true,
        country:true,
        state:true,
        zip:true,
        primaryContact:true,
        createdOn:true,
        lastModified:true
    }
  constructor(private route:ActivatedRoute, private transactionsService:TransactionsService) {

  }

  ngOnInit() {
      this.transactionsService.getSelectedTransaction().subscribe(data => {
          this.selectedTransaction = data;
      })
      this.transactionsService.getTransactions().subscribe(data => {
          this.allTransactions = data;
      })
  }

}
