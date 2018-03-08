import { Component, OnInit } from '@angular/core';
import { DealService } from '../services/deal.service';
import { Deal } from '../services/Deal';
import { DataService } from '../services/data.service';
import { environment } from '../../../../environments/environment';
import { Data } from '../services/Data';

@Component({
  selector: 'app-all-deals',
  templateUrl: './all-deals.component.html',
  styleUrls: ['./all-deals.component.css'],
  providers:[DealService,DataService]
})
export class AllDealsComponent implements OnInit {
  //allDealsUrl:string ='http://localhost:3000/deals/dealRole/active?userName=Hiranmayi%20Thacker';
  
  public allDeals : Deal[];
  public allDealsCount:number;
  btnDNAText: string='View Deal DNA';
  btnDetailsText: string='View Deal Details';
  public errorMsg;
  childExists: boolean = true;
  public allDealsUrl:string;
  public allDealUrl:string;
  constructor(private _dealService: DealService,private _dataService: DataService) { }

  ngOnInit() {}

   /*  this._dataService.getDealUrlDetails().subscribe((data:Data[])=>{
      for(let deal of data){
         this.allDealsUrl= deal.allDealsUrl;
        }
       this.allDealUrl =environment.apiBaseUrl+this.allDealsUrl;
    
    this._dealService.getDealDetails(this.allDealUrl,'allDeals').subscribe((allDeals: Deal[]) => {
      this.allDeals = allDeals;
      
      this.allDealsCount = allDeals.length;
    });
  });
  }
  private deleteHandler(): void {
    this.childExists = false;
  } */

}