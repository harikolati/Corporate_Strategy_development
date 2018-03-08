import { Component, OnInit } from '@angular/core';
import {DataAccessService} from "../access-setup/data-access.service";


@Component({
  selector: 'app-status-report',
  templateUrl: './status-report.component.html',
  styleUrls: ['./status-report.component.css']
})
export class StatusReportComponent implements OnInit {
    moduleList: any = [
        {
            module_name:'Select Template Type',
            module_id:''
        }
    ];
    transactionsList: any = [
        {
            acquisition_name:'',
            acquisition_no:''
        }
    ];
    car: any[];
    cols: any[];

    selectedTemplate:any='';
    selectedTransaction:any=''
  constructor(private dataAccessservice:DataAccessService) { }

  ngOnInit() {
      this.getModules();
      this.getTransactions();
      this.car =[{BatchID :'test1',TransName:'test2',Filename: 'test3'},{BatchID :'test1',TransName:'test2',Filename: 'test3'}];
      this.cols = [
          { field: 'BatchID', header: 'Batch ID' },
          {field: 'TransName', header: 'Trans Name' },
          { field: 'Filename', header: 'Filename' },
          { field: '', header: 'Template Type' },
          { field: '', header: 'Total Records' },
          { field: '', header: 'Invalid Records' },
          { field: '', header: 'CR New' },
          { field: '', header: 'CR Existing' },
          { field: '', header: 'SFDC Mapped' },
          {field: '', header: 'SAVM CR Map' },
          {field: '', header: 'SAVM SFDC Map' },
          {field: '', header: 'Uploaded By' },
          { field: '', header: 'Timestamp' }

      ];

  }
    getModules() {
        this.dataAccessservice.getAllModules().subscribe(data => {
            this.moduleList = data;
        });
    }
    getTransactions(){
        this.dataAccessservice.getAllCompany().subscribe(data => {
            this.transactionsList = data;
        })
    }
    onTemplateTypeSelection($event) {
        console.log("selecetd value", this.selectedTemplate);
        console.log("selecetd selectedTransaction", this.selectedTransaction);
    }
}
