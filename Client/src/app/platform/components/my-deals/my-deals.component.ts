import { Component, OnInit,ChangeDetectionStrategy ,Output,EventEmitter} from '@angular/core';
import { DealService } from '../services/deal.service';
import { DataService } from '../services/data.service';
import { Deal } from '../services/Deal';
import { Data } from '../services/data';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-my-deals',
  templateUrl: './my-deals.component.html',
  styleUrls: ['./my-deals.component.css']
})
/**
 * @class: MyDealsComponent
 * Description : To get 'Mydeals data' - Active deals, followed deals and inactive deals
 */

export class MyDealsComponent implements OnInit {

  public show:boolean = false;
  public showFollow:boolean = false;
  public showInactive:boolean = false;
  public buttonName:any = 'Show';
  
  public isActive: boolean = true;
  public isFollow: boolean = false;
  public isInactive: boolean = false;
  childExists: boolean = true;
  
  private deleteHandler(): void {
    this.childExists = false;
  }
  @Output() toggleactive = new EventEmitter<Deal>();
  toggle() {
    this.show = !this.show;
    this.showFollow=false;
    this.showInactive=false;
    
  }
  toggleFollow() {
    this.showFollow = !this.showFollow;
    this.show=false;
    this.showInactive=false;
    this.isActive = !this.isActive;
    this.isFollow = !this.isFollow;
  }
  toggleInactive() {
    this.showInactive = !this.showInactive;
    this.show=false;
    this.showFollow=false;
    this.isActive = !this.isActive;
    this.isInactive = !this.isInactive;
  }
  toggleAll(){
    this.show = !this.show;
    this.showFollow = !this.showFollow;
    this.showInactive = !this.showInactive;
  }


  /* 
  public activeDeals : Deal[];
  public followedDeals: Deal[];
  public InactiveDeals : Deal[];
  public InactiveCompDeals : Deal[] = [];
  public InactiveOnHoldDeals: Deal[] = [];
  public dealUrl : Data[];
  activeDealsCount:number;
  followedDealsCount:number;
  inactiveDealsCount:number;
  
  activeDealsCurrpg: number = 1;
  followDealsCurrpg: number = 1;
  inActiveDealsCurrpg: number = 1;
  public errorMsg;
  public showCompletedDealsFlg:boolean;
  public isClassVisible: boolean;
  public data :any;
  
  public activeDealsUrl:string;
  public activeUrl:string;
  public followedDealsUrl:string;
  public followedUrl:string;
  public inactiveDealsUrl:string;
  public inactiveUrl:string;
 */
  constructor(private _dealService: DealService,private _dataService : DataService) { 
   /*  this.showCompletedDealsFlg = true; 
    this.isClassVisible = true; 
    
    
       
    this._dataService.getDealUrlDetails().subscribe((data:Data[])=>{
     
        for(let deal of data){
         
          this.activeDealsUrl= deal.activeDealsUrl;
          this.followedDealsUrl=deal.followedDealsUrl;
          this.inactiveDealsUrl=deal.inactiveDealsUrl;
         
         }
       this.activeUrl =environment.apiBaseUrl+this.activeDealsUrl;
       this.followedUrl =environment.apiBaseUrl+this.followedDealsUrl;
       this.inactiveUrl =environment.apiBaseUrl+this.inactiveDealsUrl;
   
      this._dealService.getDealDetails(this.activeUrl,"active").subscribe((activeDeals: Deal[]) => {
         this.activeDeals = activeDeals;
         this.activeDealsCount= this.activeDeals.length;
       });
       
       
       
       this._dealService.getDealDetails(this.followedUrl,'followed').subscribe((followedDeals: Deal[]) => {
         this.followedDeals = followedDeals;
         this.followedDealsCount = this.followedDeals.length;
       });
       
      
       this._dealService.getDealDetails(this.inactiveUrl,'inactive').subscribe((InactiveDeals: Deal[]) => {
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
       
         }); */
  }
  
     ngOnInit() {
  
     
  }

 /*  showCompletedDealsDiv(flagVal : boolean){
    this.showCompletedDealsFlg = flagVal;  
    this.isClassVisible = flagVal;  
  }
   */
 
  }
 
