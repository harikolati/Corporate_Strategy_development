import { Component, OnInit } from '@angular/core';
import { DealService } from '../services/deal.service';
import { FollowedDealService } from '../services/followed-deal.service';
import { InactiveDealService } from '../services/inactive-deal.service';

@Component({
  selector: 'app-all-deals',
  templateUrl: './all-deals.component.html',
  styleUrls: ['./all-deals.component.css']
})
export class AllDealsComponent implements OnInit {
  activeDealsUrl:string ='http://localhost:3000/deals/dealRole?userName=Hiranmayi%20Thacker';
  followedDealsUrl:string ='http://localhost:3000/deals/dealRole?userName=Hiranmayi%20Thacker';
  inactiveDealsUrl:string ='http://localhost:3000/deals/dealRole?userName=Hiranmayi%20Thacker';


  public activeDeals;
  public followedDeals;
  public InactiveDeals;
  public allDealsCount:number;
  btnDNAText: string='View Deal DNA';
  btnDetailsText: string='View Deal Details';
  public errorMsg;

  constructor(private _dealService: DealService,private _followedDealService: FollowedDealService,
    private _inactiveDealService: InactiveDealService) { }

 async  ngOnInit() {

    //To get Active deal info
    this.activeDeals =  this._dealService.getDealDetails(this.activeDealsUrl);
    //To get Followed deal info
    this.followedDeals =  this._dealService.getDealDetails(this.activeDealsUrl)
    
    //To get InActive deal info
    this.InactiveDeals =  this._dealService.getDealDetails(this.activeDealsUrl);
    //To get all deals count
    this.allDealsCount = this.followedDeals.length + this.followedDeals.length + this.activeDeals.length;
  }

}
