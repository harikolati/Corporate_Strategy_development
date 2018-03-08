import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {TemplateUploadDownloadService} from "./template-upload-download.service";
import {DefineFieldsModalComponent} from "./define-fields-modal/define-fields-modal.component";
import {DataAccessService} from "../access-setup/data-access.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-template-upload-download',
  templateUrl: './template-upload-download.component.html',
  styleUrls: ['./template-upload-download.component.scss']
})
export class TemplateUploadDownloadComponent implements OnInit {
    @ViewChild('fileUploadInput') fI:any;
    @ViewChild(DefineFieldsModalComponent) public defineFieldsModal:DefineFieldsModalComponent;
    moduleList: any = [
        {
            module_name:'Select Template Type',
            module_id:''
        }
    ];
    transactionsList: any = [
        {
            adl_acquisition_name:'',
            adl_acquisition_no:''
        }
    ];
    selectedFile:File;
    selectedFileName:string = ''
    selectedTemplate:any='';
    selectedTransaction:any='';
    showModal:boolean = false;
    uploadProgress:Number = 0;
    uploadingFile:boolean = false;
    alertOptions = {
        "msg": "",
        "severity": "info",
        "show": null,
        "hide": null
    }
  constructor(private _templateDownlaod : TemplateUploadDownloadService, private dataAccessservice:DataAccessService, private renderer:Renderer2) { }

  ngOnInit() {
      this.getTransactions();
      this.getModules();
      this._templateDownlaod.getFlexFieldEvents().subscribe(data => {
          data.status == "SUCCESS" ? this.alertOptions.show('Flex fields has been successfully saved', "success") : this.alertOptions.show('There is something wrong while processing your request', "error");
      })
  }

    getTransactions(){
        this.dataAccessservice.getAllCompany().subscribe(data => {
            this.transactionsList = data;
        })
    }

    getModules(){
        this.dataAccessservice.getAllModules().subscribe(data => {
            this.moduleList = data;
        })
    }

    downloadFile(data: Response){
      //console.log("data######",data.docs[0]);
        var blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;' });
        var url= window.URL.createObjectURL(blob);
        window.open(url);
    }
    downloadTemplate(){
        this._templateDownlaod.getTemplate().subscribe(data => this.downloadFile(data[0])),//console.log(data),
            error => console.log("Error downloading the file."),
            () => console.info("OK");
    }

    onTemplateTypeSelection($event){

    }

    onTransactionTypeSelection($event){

    }

    browseFiles(){
        document.getElementById('fileInput').click()
    }

    fileSelected(event){
        this.selectedFile = event.target.files[0];
        this.selectedFileName = event.target.files[0] ? event.target.files[0].name : '';
;        //this.fI.nativeElement.focus()
        this.renderer.selectRootElement(this.fI.nativeElement).focus();
    }

    uploadFile(){
        if(this.selectedTemplate && this.selectedTransaction && this.selectedFile){
            this.uploadingFile = true;
            const formData:FormData = new FormData();
            let metadata = {
                userid: 'saangapp',
                module_id: this.selectedTemplate,
                acquisition_no:this.selectedTransaction,
            }
            formData.append('file', this.selectedFile);
            formData.append('metadata', new Blob([JSON.stringify(metadata)], {type: "application/json"}));
            this._templateDownlaod.uploadFile(formData)
                .filter((event:any) => event.type === HttpEventType.UploadProgress || event instanceof HttpResponse)
                .map((event) => {
                    if (event.type === HttpEventType.UploadProgress) {
                        const percentDone = Math.round(100 * event.loaded / event.total);
                        this.uploadProgress = percentDone;
                    } else if (event instanceof HttpResponse) {
                        return { type: 'httpResponse', status: event.status };
                    }
                })
                .subscribe(event => {
                    this.uploadingFile = false;
                    this.uploadProgress = 0;
                    this.alertOptions.show('You file has been successfully uploaded', "success");
                    this.selectedTransaction = '';
                    this.selectedTemplate = '';
                });
        }
    }

    defineFields(){
        let selectedTemplateName = this.moduleList.filter(e => e.module_id == this.selectedTemplate)[0].module_name;
        let selectedTransactionName = this.transactionsList.filter(e => e.adl_acquisition_no == this.selectedTransaction)[0].adl_acquisition_name
        this._templateDownlaod.getFlexFields(selectedTemplateName, selectedTransactionName).subscribe(data => {
            this.defineFieldsModal.showModal(data, selectedTemplateName, this.selectedTemplate, selectedTransactionName, this.selectedTransaction);
        });
    }

}
