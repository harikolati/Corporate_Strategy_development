import { Component, OnInit } from '@angular/core';
import {FormOptions} from "../form-options";
import {InputsRequired} from "../inputs-required";

@Component({
  selector: 'app-create-new-transaction',
  templateUrl: './create-new-transaction.component.html',
  styleUrls: ['./create-new-transaction.component.css']
})
export class CreateNewTransactionComponent implements OnInit {
  formOptions:FormOptions = {
    header:true,
    activeInactiveSwitch:false,
      inputWidth:'col-4',
      editMode:false,
      formExpand:false
  }
  inputsRequired:InputsRequired = {
      transactionName: true,
      transactionCode: true,
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
      lastModified:false
  }
  constructor() { }

  ngOnInit() {
  }

}
