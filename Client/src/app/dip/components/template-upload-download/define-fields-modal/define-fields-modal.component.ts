import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {TransactionsService} from "../../transactions-upload/transactions.service";
import {TemplateUploadDownloadService} from "../template-upload-download.service";
import {globalObject} from "../../dip-shared/globalObject";

@Component({
  selector: 'app-define-fields-modal',
  templateUrl: './define-fields-modal.component.html',
  styleUrls: ['./define-fields-modal.component.css']
})
export class DefineFieldsModalComponent implements OnInit {
  @ViewChild('modal') modal:ElementRef;
  modalBackdrop:boolean = false;
  flexForm:FormGroup;
  flexFields = [
      {
          "name":'dip_flex_1',
          "formControlName":'flex_1',
      },
      {
          "name":'dip_flex_2',
          "formControlName":'flex_2',
      },
      {
          "name":'dip_flex_3',
          "formControlName":'flex_3',
      },
      {
          "name":'dip_flex_4',
          "formControlName":'flex_4',
      },
      {
          "name":'dip_flex_5',
          "formControlName":'flex_5',
      },
      {
          "name":'dip_flex_6',
          "formControlName":'flex_6',
      },
      {
          "name":'dip_flex_7',
          "formControlName":'flex_7',
      },
      {
          "name":'dip_flex_8',
          "formControlName":'flex_8',
      },
      {
          "name":'dip_flex_9',
          "formControlName":'flex_9',
      },
      {
          "name":'cpr_flex_1',
          "formControlName":'cpr_flex_1',
      },
      {
          "name":'cpr_flex_2',
          "formControlName":'cpr_flex_2',
      },
      {
          "name":'cpr_flex_3',
          "formControlName":'cpr_flex_3',
      },
      {
          "name":'cpr_flex_4',
          "formControlName":'cpr_flex_4',
      },
      {
          "name":'cpr_flex_5',
          "formControlName":'cpr_flex_5',
      },
      {
          "name":'cpr_flex_6',
          "formControlName":'cpr_flex_6',
      },
      {
          "name":'cpr_flex_7',
          "formControlName":'cpr_flex_7',
      },
      {
          "name":'cpr_flex_8',
          "formControlName":'cpr_flex_8',
      },
      {
          "name":'cpr_flex_9',
          "formControlName":'cpr_flex_9',
      },
      {
          "name":'cpr_flex_10',
          "formControlName":'cpr_flex_10',
      },

  ]
  constructor(private fb:FormBuilder, private templateService:TemplateUploadDownloadService) { }

  ngOnInit() {
    this.flexForm = this.fb.group({
        'flex_1':'',
        'flex_2':'',
        'flex_3':'',
        'flex_4':'',
        'flex_5':'',
        'flex_6':'',
        'flex_7':'',
        'flex_8':'',
        'flex_9':'',
        'cpr_flex_1':'',
        'cpr_flex_2':'',
        'cpr_flex_3':'',
        'cpr_flex_4':'',
        'cpr_flex_5':'',
        'cpr_flex_6':'',
        'cpr_flex_7':'',
        'cpr_flex_8':'',
        'cpr_flex_9':'',
        'cpr_flex_10':'',
        'acq_code':'',
        'acq_name':'',
        'module_id':'',
        'module_name':'',
        'cpr_updated_date':'',
        'cpr_updated_by':''
    })
  }

  showModal(data, templateName, templateId, transactionName, transactionId){
    this.modal.nativeElement.style.display = 'block';
    this.modalBackdrop = true;
    if(data){
        Object.keys(data).map(each => {
            console.log(this.flexForm.get(each));
            console.log(data)
            this.flexForm.get(each) ? this.flexForm.get(each).patchValue(data[each]) : null
        })
    }
      this.flexForm.get('acq_code').patchValue(transactionId);
      this.flexForm.get('acq_name').patchValue(transactionName);
      this.flexForm.get('module_id').patchValue(templateId);
      this.flexForm.get('acq_code').patchValue(templateName);
      this.flexForm.get('cpr_updated_date').patchValue(globalObject.todayDate);
      this.flexForm.get('cpr_updated_by').patchValue('sripanig');
  }
  closeModal(){
      this.modal.nativeElement.style.display = '';
      this.modalBackdrop = false;
      this.flexForm.reset();
  }

  saveFlexFields(){
      this.templateService.saveFlexFields(this.flexForm.value).subscribe(data => {
          this.closeModal();
          this.templateService.setFlexFieldSaved(data);
          this.flexForm.reset();
      })
  }

}
