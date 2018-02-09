import { Component, OnInit } from '@angular/core';
import { DealService } from '../deal.service';
import { FollowedDealService } from '../followed-deal.service';
import { InactiveDealService } from '../inactive-deal.service';

@Component({
  selector: 'app-all-deals',
  templateUrl: './all-deals.component.html',
  styleUrls: ['./all-deals.component.css']
})
export class AllDealsComponent implements OnInit {
  public deals= [];
  public followedDeals= [];
  public InactiveDeals= [];
  public allDealsCount:number;
  btnDNAText: string='View Deal DNA';
  btnDetailsText: string='View Deal Details';
  public errorMsg;

  constructor(private _dealService: DealService,private _followedDealService: FollowedDealService,
    private _inactiveDealService: InactiveDealService) { }

  ngOnInit() {

    //To get Active deal info
    this._dealService.getDealDetails() .subscribe(data => this.deals = data,      
      error => this.errorMsg = error);

    
    //To get Followed deal info
    this.followedDeals = this._followedDealService.getFollowedDealDetails();
    
    //To get InActive deal info
    this.InactiveDeals = this._inactiveDealService.getInactiveDealDetails();
    //To get all deals count
    this.allDealsCount = this.followedDeals.length + this.followedDeals.length + this.deals.length;
  }

}
