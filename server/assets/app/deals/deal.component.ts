import { Component,Input,Output,EventEmitter } from "@angular/core";
import { Deal } from "./deal.model";


@Component({
    selector:'app-deal',
    templateUrl:'./deal.component.html'
})

export class DealComponent {
  @Input('inputDeal')  deal : Deal ;
  @Output('editDeal') editDeal=new EventEmitter<string>();

  onEdit(){
    this.deal.dealCode="Edited Deal Code";
  }
}