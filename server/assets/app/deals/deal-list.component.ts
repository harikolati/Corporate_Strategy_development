import { Component,OnInit } from "@angular/core";
import { Deal } from './deal.model';
import { DealService } from "./deal.service";
@Component({
    selector:'app-deal-list',
    templateUrl:`
    <app-deal 
        [inputDeal]="deal" 
        (editDeal)="content =$event" 
        *ngFor="let deal of deals">
    </app-deal>
    `,
    providers : [DealService]
})
export class DealListComponent implements OnInit{
    deals : Deal[];
    constructor(private dealService : DealService){}
    ngOnInit(){
        this.dealService.getDeals()
         .subscribe(
                (deals: Deal[]) => {
                    this.deals = deals;
                }
            );
    }
}
