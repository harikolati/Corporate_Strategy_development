import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { DealService } from '../services/deal.service';
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

  
  activeDealsUrl:string ='http://localhost:3000/deals/dealRole/active?userName=Hiranmayi%20Thacker';
followedDealsUrl:string ='http://localhost:3000/deals/dealRole/followed?userName=Hiranmayi%20Thacker';
  inactiveDealsUrl:string ='http://localhost:3000/deals/dealRole/inActive?userName=Hiranmayi%20Thacker';

  public activeDeals : Deal[];
  public followedDeals: Deal[];
  public InactiveDeals : Deal[];
   public InactiveCompDeals : Deal[] = [];
  public InactiveOnHoldDeals: Deal[] = [];

  activeDealsCount: number;
  followedDealsCount:number;
  inactiveDealsCount:number;
  
  activeDealsCurrpg: number = 1;
  followDealsCurrpg: number = 1;
  inActiveDealsCurrpg: number = 1;
  public errorMsg;
  public showCompletedDealsFlg:boolean;
  public isClassVisible: boolean;
  childExists: boolean = true;
  
  constructor(private _dealService: DealService) { 
    this.showCompletedDealsFlg = true; 
    this.isClassVisible = true; 

     /**
     *To get Active deal info through service
     */
      
    this._dealService.getDealDetails(this.activeDealsUrl,"active").subscribe((activeDeals: Deal[]) => {
      this.activeDeals = activeDeals;
      this.activeDealsCount= this.activeDeals.length;
    });
    
  
    /**
     *To get followed deal info 
     */
    this._dealService.getDealDetails(this.followedDealsUrl,'followed').subscribe((followedDeals: Deal[]) => {
      this.followedDeals = followedDeals;
      this.followedDealsCount = this.followedDeals.length;
    });
   

    /**
     *To get InActive deal info 
     */
    this._dealService.getDealDetails(this.inactiveDealsUrl,'inactive').subscribe((InactiveDeals: Deal[]) => {
      this.InactiveDeals = InactiveDeals;
     
      for(let deal of InactiveDeals){
        if(deal.transactionStage == 'Onhold'){
              this.InactiveOnHoldDeals.push(deal);                   
        }else{
              this.InactiveCompDeals.push(deal);         
        }
    }//for
    this.inactiveDealsCount = this.InactiveDeals.length;            
  });    

  }

     ngOnInit() {
    
    
    
  }//end ngInt

  showCompletedDealsDiv(flagVal : boolean){
    this.showCompletedDealsFlg = flagVal;  
    this.isClassVisible = flagVal;  
  }//end func
  
  
  private deleteHandler(): void {
    this.childExists = false;
  }
 
}