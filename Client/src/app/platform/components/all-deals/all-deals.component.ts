import { Component, OnInit } from '@angular/core';
import { DealService } from '../services/deal.service';
import { Deal } from '../services/Deal';

@Component({
  selector: 'app-all-deals',
  templateUrl: './all-deals.component.html',
  styleUrls: ['./all-deals.component.css'],
  providers:[DealService]
})
export class AllDealsComponent implements OnInit {
  allDealsUrl:string ='http://localhost:3000/deals/dealRole/active?userName=Hiranmayi%20Thacker';
  
  public allDeals : Deal[];
  public allDealsCount:number;
  btnDNAText: string='View Deal DNA';
  btnDetailsText: string='View Deal Details';
  public errorMsg;
  childExists: boolean = true;

  constructor(private _dealService: DealService) { }

  ngOnInit() {

    //To get all deal info
    this._dealService.getDealDetails(this.allDealsUrl,'allDeals').subscribe((allDeals: Deal[]) => {
      this.allDeals = allDeals;
      //To get all deals count
      this.allDealsCount = allDeals.length;
    });
   
  }//end ngOnInit

  private deleteHandler(): void {
    this.childExists = false;
  }

}
