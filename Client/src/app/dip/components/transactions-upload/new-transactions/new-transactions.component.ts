import {Component, Input, OnInit} from '@angular/core';
import {Validators, FormGroup, FormBuilder, FormControl} from '@angular/forms';
import {FormOptions} from "../form-options";
import {InputsRequired} from "../inputs-required";

@Component({
    selector: 'app-new-transactions',
    templateUrl: './new-transactions.component.html',
    styleUrls: ['./new-transactions.component.css']
})
export class NewTransactionsComponent implements OnInit {
    @Input() formOptions: FormOptions
    @Input() inputsRequired: InputsRequired;
    isFormExpanded: boolean = false;
    isEditMode: boolean = true;
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
        createdOn: '',
        lastModified: ''
    });


    constructor(public fb: FormBuilder) {
    }

    ngOnInit() {
        if(this.formOptions.editMode){
            this.isEditMode = false;
        }
        this.isFormExpanded = !this.formOptions.formExpand;
    }

    submitForm(value: any): void {
        console.log("submit form value", value);
        if (!this.transactionForm.valid) {
            Object.keys(this.transactionForm.controls).forEach(key => {
                console.log("key", key, this.transactionForm.get(key).valid);
                this.transactionForm.get(key).markAsTouched();
            });
        }
    }

    toggleEdit() {
        this.isEditMode = !this.isEditMode;
        if(this.isEditMode && this.formOptions.editMode){
            this.isFormExpanded = true;
        }
    }

    toggleExpandMode() {
        this.formOptions.editMode ? this.isFormExpanded = !this.isFormExpanded : null;

    }
}
