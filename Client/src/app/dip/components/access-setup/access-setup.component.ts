import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-setup',
  templateUrl: './access-setup.component.html',
  styleUrls: ['./access-setup.component.scss']
})
export class AccessSetupComponent implements OnInit {
    individualTabs: Array<any>;
  constructor() { }

  ngOnInit() {
      this.individualTabs = [{label: "Modules & Roles", url: 'modules-roles', title: 'Modules & Roles' },
          // {label: "Company", url: 'company'},
          {label: "Access Management", url: 'access-management', title: 'Access Management'}
      ]
  }

}
