import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-tab',
  templateUrl: './horizontal-tab.component.html',
  styleUrls: ['./horizontal-tab.component.scss']
})
export class HorizontalTabComponent implements OnInit {
    @Input() individualTab:Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
