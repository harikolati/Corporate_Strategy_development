import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { DealService } from '../services/deal.service';
import { FollowedDealService } from '../services/followed-deal.service';
import { InactiveDealService } from '../services/inactive-deal.service';
import { Deal } from '../services/Deal';

@Component({
  selector: 'app-my-deals',
  templateUrl: './my-deals.component.html',
  styleUrls: ['./my-deals.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
/**
 * @class: MyDealsComponent
 * Description : To get 'Mydeals data' - Active deals, followed deals and inactive deals
 */

export class MyDealsComponent implements OnInit {

  public activeDeals: Deal[]=[];
  public followedDeals=[];
  public InactiveDeals=[];

  activeDealsCount:number;
  followedDealsCount:number;
  inactiveDealsCount:number;
  
  activeDealsCurrpg: number = 1;
  followDealsCurrpg: number = 1;
  inActiveDealsCurrpg: number = 1;
  public errorMsg;

  constructor(private _dealService: DealService,private _followedDealService: FollowedDealService,
    private _inactiveDealService: InactiveDealService) { }

  ngOnInit() {
    /**
     *To get Active deal info through service
     */
       
    this._dealService.getDealDetails() .subscribe(data => {this.activeDeals = data;this.activeDealsCount=this.activeDeals.length;},      
                      error => this.errorMsg = error);
       
    
    console.log(this.activeDealsCount);
    console.log(this.activeDeals);

    /**
     *To get followed deal info 
     */
    this.followedDeals = this._followedDealService.getFollowedDealDetails();
    this.followedDealsCount = this.followedDeals.length;
    
    console.log(this.followedDealsCount);
    console.log(this.followedDeals);

    /**
     *To get InActive deal info 
     */
    this.InactiveDeals = this._inactiveDealService.getInactiveDealDetails();
    this.inactiveDealsCount = this.InactiveDeals.length;
    
    console.log(this.inactiveDealsCount);
    console.log(this.InactiveDeals);
    
  }

}
