import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-dip-view',
    templateUrl: './dip-view.component.html',
    styleUrls: ['./dip-view.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class DipViewComponent implements OnInit {

    dipTabs: Array<any>;

    constructor() {
    }

    ngOnInit() {
        this.dipTabs = [{label: "Upload", url: 'upload', title: 'Upload'},
            {label: "Status", url: 'status', title: 'Status'},
            {label: "Transactions", url: 'transactions', title: 'Transactions'},
            {label: "Admin", url: 'admin', title: 'Admin'}
        ]
    }

}
