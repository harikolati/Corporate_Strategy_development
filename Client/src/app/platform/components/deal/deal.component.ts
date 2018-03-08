import { Component, OnInit, Input } from '@angular/core';
import { Deal } from '../services/Deal';
import { DealService } from '../services/deal.service';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss'],
  providers :[DealService]
})
export class DealComponent implements OnInit {

  @Input('dealData')
  public deal : Deal;
 public dealtypeInfo :any;
  btnDNAText: string='View Deal DNA';
  btnDetailsText: string='View Deal Details';
  
  constructor(private dealService : DealService) { 
    
  }

  ngOnInit() {
  }

}
