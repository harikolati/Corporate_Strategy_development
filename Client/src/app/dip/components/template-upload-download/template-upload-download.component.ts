import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {TemplateUploadDownloadService} from "./template-upload-download.service";
import {DefineFieldsModalComponent} from "./define-fields-modal/define-fields-modal.component";

@Component({
  selector: 'app-template-upload-download',
  templateUrl: './template-upload-download.component.html',
  styleUrls: ['./template-upload-download.component.scss']
})
export class TemplateUploadDownloadComponent implements OnInit {
    @ViewChild('fileUploadInput') fI:any;
    @ViewChild(DefineFieldsModalComponent) public defineFieldsModal:DefineFieldsModalComponent;
    ModuleList: Array<any>;
    TransactionList: Array<any>;
    items:Array<any>;
    selectedFileName:string = '';
    selectedTemplate:any='';
    showModal:boolean = false;
  constructor(private _templateDownlaod : TemplateUploadDownloadService, private renderer:Renderer2) { }

  ngOnInit() {
     this.items = [
         {
             "name": "Select Template Type",
             "value": '',
             "selected": true
         },
         {
             "name": "Item One",
             "value": 1,
             "selected": false
         },

         {
             "name": "Item Three",
             "value": 3,
             "selected": false
         },
         {
             "name": "Item Four",
             "value": 4,
             "selected": false
         }
     ]
     this.TransactionList = ["transaction1","transaction2","transaction"];
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

    browseFiles(){
        document.getElementById('fileInput').click()
    }

    fileSelected(event){
        console.log(event);
        this.selectedFileName = event.target.files[0].name;
        console.log(this.renderer.selectRootElement(this.fI.nativeElement));
        //this.fI.nativeElement.focus()
        this.renderer.selectRootElement(this.fI.nativeElement).focus();
    }

    defineFields(){
        this.defineFieldsModal.showModal();
    }

}
