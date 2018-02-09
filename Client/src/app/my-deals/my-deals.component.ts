import { Component, OnInit } from '@angular/core';
import { DealService } from '../deal.service';
import { FollowedDealService } from '../followed-deal.service';
import { InactiveDealService } from '../inactive-deal.service';


@Component({
  selector: 'app-my-deals',
  templateUrl: './my-deals.component.html',
  styleUrls: ['./my-deals.component.css']
})
export class MyDealsComponent implements OnInit {

  public deals= [];
  public followedDeals= [];
  public InactiveDeals= [];
  activeDealsCount:number;
  followedDealsCount:number;
  inactiveDealsCount:number;
  btnDNAText: string='View Deal DNA';
  btnDetailsText: string='View Deal Details';
  public errorMsg;

  constructor(private _dealService: DealService,private _followedDealService: FollowedDealService,
    private _inactiveDealService: InactiveDealService) { }

  ngOnInit() {

    //To get Active deal info
    this._dealService.getDealDetails() .subscribe(data => {this.deals = data;this.activeDealsCount=this.deals.length;},      
                      error => this.errorMsg = error);
    
    
    console.log(this.activeDealsCount);
    console.log(this.deals);

    //To get Followed deal info
    this.followedDeals = this._followedDealService.getFollowedDealDetails();
    this.followedDealsCount = this.followedDeals.length;
    
    console.log(this.followedDealsCount);
    console.log(this.followedDeals);

    //To get InActive deal info
    this.InactiveDeals = this._inactiveDealService.getInactiveDealDetails();
    this.inactiveDealsCount = this.InactiveDeals.length;
    
    console.log(this.inactiveDealsCount);
    console.log(this.InactiveDeals);
    
  }

}
