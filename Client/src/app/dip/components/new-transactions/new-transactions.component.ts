import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-transactions',
  templateUrl: './new-transactions.component.html',
  styleUrls: ['./new-transactions.component.css']
})
export class NewTransactionsComponent implements OnInit {
    transactionForm: FormGroup = this.fb.group({
        transName: ['', Validators.required],
        transCode: ['', Validators.required],
        transType: ['', Validators.required],
        publicAnnounce: ['', Validators.required],
        segment: ['', Validators.required],
        address1: '',
        address2: '',
        address3: '',
        city: '',
        county: '',
        state: '',
        country: '',
        pincode: '',
        primaryContact: '',
        createdOn: ''
    });
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
  }
    submitForm(value: any): void {
        console.log("submit form value",value);
        if (!this.transactionForm.valid) {
            Object.keys(this.transactionForm.controls).forEach(key => {
                console.log("key",key, this.transactionForm.get(key).valid);
                this.transactionForm.get(key).markAsTouched();
            });
        }
    }
}
