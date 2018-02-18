import { Component, OnInit, Input } from '@angular/core';
import { Deal } from '../services/Deal';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss']
})
export class DealComponent implements OnInit {

  @Input('dealData')
  private deal : Deal;
  btnDNAText: string='View Deal DNA';
  btnDetailsText: string='View Deal Details';
  
  constructor() { }

  ngOnInit() {
  }

}
