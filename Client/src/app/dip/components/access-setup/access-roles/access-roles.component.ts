import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Http} from "@angular/http";
import {DataAccessService} from "../data-access.service";
import {MenuItem} from "primeng/primeng";

@Component({
    selector: 'app-access-roles',
    templateUrl: './access-roles.component.html',
    styleUrls: ['./access-roles.component.scss']
})
export class AccessRolesComponent implements OnInit {
    @ViewChild('roleTable') roleTableRef: ElementRef;
    private fieldArray: Array<any> = [];
    private newAttribute: any = {};
    private datetime;
    private currentdate;
    public roleData:any = [];
    public roleDataCopy:any = [];
    public roleDataTemp:any = [];
    public newlyAddedOrUpdatedRoles = [];
    isRequestPending:boolean = false;
    alertOptions = {
        "msg": "",
        "severity": "info",
        "show": null,
        "hide": null
    }
    selectedRoles:any = [];
    items:MenuItem[];
    constructor(private dataAccessservice: DataAccessService, public elementRef:ElementRef) {
    }

    ngOnInit() {
        this.currentdate = new Date();
        this.getAllRoles();
        this.datetime = this.currentdate.getMonth() + 1 + "/" + this.currentdate.getDate()
            + "/" + this.currentdate.getFullYear() + "  "
            + this.currentdate.getHours() + ":"
            + this.currentdate.getMinutes() + ":" + this.currentdate.getSeconds();
        this.newAttribute = {role: '', updatedBy: 'sripanig', updatedOn: this.datetime};
    }

    getAllRoles() {

        this.isRequestPending = true;
        this.dataAccessservice.getAllRoles().subscribe(data => {
            this.isRequestPending = false;
            this.roleData = data;
            this.roleData = this.newlyAddedOrUpdatedRoles.length ? this.mergeNewlyAddedWithExistingRoles() : this.roleData;
            this.roleData.map((each, index) => {
                each.rowId = index;
                each.newlyAdded = false;
            })
            this.roleDataTemp  = this.roleData.map(x => Object.assign({}, x));
        })
    }
    mergeNewlyAddedWithExistingRoles(){
        let tempNewlyAddedOrUpdated = this.newlyAddedOrUpdatedRoles.map(x => Object.assign({}, x));
        this.roleData = this.roleData.filter(m =>  !tempNewlyAddedOrUpdated.some(b => b.role_id == m.role_id));
        this.roleData = this.roleData.concat(tempNewlyAddedOrUpdated);
        return this.roleData;
    }

    addNewRole(){
        let emptyRow = this.roleData.some(each => {
            return each.last_updated_by == '';
        })
        if(!emptyRow){
            this.roleData = [...this.roleData, {role_name:'', last_updated_by:'', last_updated_on:'', active_flag:false, newlyAdded:true, rowId:this.roleData.length}]
        }
        let Id = (this.roleData.length - 1).toString() + 'role';
        let tableHeight = this.roleTableRef.nativeElement.offsetHeight;
        if(tableHeight >= 400){
            setTimeout(()=> {
                const element = this.elementRef.nativeElement.ownerDocument.getElementById(Id);
                element.scrollIntoView({behaviour:'smooth'});
            }, 100);
        }
        console.log(this.roleData)
        //el.scrollTop = el.scrollHeight;
    }

    deleteSelectedRole(role){
        //CAll the delete service if the role_name is not empty

        /*let rolesToDeleteInServer = this.selectedRoles.filter(e =>  {return e.hasOwnProperty("role_id")});
        console.log(rolesToDeleteInServer);
        let newlyAddedRolesToDelete = this.selectedRoles.filter(e => {return !e.hasOwnProperty("role_id")});

        if(rolesToDeleteInServer.length){
            this.isRequestPending = true;
            this.newlyAddedOrUpdatedRoles = this.newlyAddedOrUpdatedRoles.filter(o1 => !rolesToDeleteInServer.some(o2 => o1.rowId === o2.rowId));
            this.dataAccessservice.deleteRoles(rolesToDeleteInServer).subscribe(data => {
                this.isRequestPending = false;
                this.alertOptions.show('Role(s) deleted successfully', "success");
                this.getAllRoles();
            })
        }
        if(newlyAddedRolesToDelete.length){
            newlyAddedRolesToDelete.map(role => {
                var index = this.roleData.findIndex(each => {
                    return each.rowId == role.rowId;
                })
                if (index !== -1) {
                    this.roleDataCopy = Object.assign([], this.roleData);
                    this.roleDataCopy.splice(index, 1);
                    this.roleData = this.roleDataCopy;
                }
            })
            this.newlyAddedOrUpdatedRoles = this.newlyAddedOrUpdatedRoles.filter(o1 => !newlyAddedRolesToDelete.some(o2 => o1.rowId === o2.rowId));
        }*/

        var index = this.roleData.findIndex(each => {
            return each.rowId == role.rowId;
        })
        if (index !== -1) {
            this.roleDataCopy = Object.assign([], this.roleData);
            this.roleDataCopy.splice(index, 1);
            this.roleData = this.roleDataCopy;
        }
        this.newlyAddedOrUpdatedRoles = this.newlyAddedOrUpdatedRoles.filter(o1 => o1.rowId != role.rowId);
        this.selectedRoles = [];

        /*else{
            // If the role name is empty delete it from the array

        }*/

    }

    statusChanged(row, event){
        let rowId = row.rowId;
        console.log(row)
        if(row.role_name){
            let tempData = this.roleData.map(x => Object.assign({}, x));
            tempData.map(each => {
                if(each.rowId == rowId){
                    each.active_flag = event;
                    this.newlyAddedOrUpdatedRoles.some(e => e.rowId == rowId) ? this.newlyAddedOrUpdatedRoles[this.newlyAddedOrUpdatedRoles.findIndex(x => x.rowId == rowId)] = each : this.newlyAddedOrUpdatedRoles.push(each);
                    this.roleDataTemp.some(e => e.rowId == rowId) ? this.roleDataTemp[this.roleDataTemp.findIndex(x => x.rowId == rowId)] = each : this.roleDataTemp.push(each);
                }
            })
            console.log(this.newlyAddedOrUpdatedRoles)
        }
    }

    onEditComplete(event){
        let newRoleName = event.data.role_name;
        let alreadyExists;
        // Check if the role_name already exists in the array. except the current row.
        alreadyExists = this.roleData.some((each, index) => {
            return (each.role_name.toLowerCase() == newRoleName.toLowerCase() && each.rowId != event.data.rowId);
        });
        if(alreadyExists){
            this.alertOptions.show('role name ' + newRoleName + ' already exists. Please enter a different role name', "danger");
            //***** Check if the last_updated_by key is empty i.e newly added Role ****\\
            if(!event.data.last_updated_by){
                // remove the object from the array if role_name already exists.
                var index = this.roleData.findIndex(each => {
                    return each.last_updated_by == '';
                })
                if (index !== -1) {
                    this.roleDataCopy = Object.assign([], this.roleData);
                    this.roleDataCopy.splice(index, 1);
                    this.roleData = this.roleDataCopy;
                }
            }
            else{
                //Revert back to old value if the role_name already exists.
                // Filter the object from the initial Array by comparing rowId.
                let newlyAddedRolesCopy = this.roleDataTemp.map(x => Object.assign({}, x));
                let oldObject = newlyAddedRolesCopy.filter(each => {
                    return each.rowId == event.data.rowId
                })[0]
                this.roleData.map(each => {
                    if(each.rowId == event.data.rowId){
                        each.role_name = oldObject.role_name;
                    }
                })
            }
        }
        else{

            let tempData = this.roleData.map(x => Object.assign({}, x));
            this.roleData.map(each => {
                if(each.rowId == event.data.rowId){
                    each.last_updated_by = 'sripanig';
                    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                    ];

                    this.datetime = monthNames[this.currentdate.getMonth() + 1] + "-" + this.currentdate.getDate()
                        + "-" + this.currentdate.getFullYear() + "  "
                        + this.currentdate.getHours() + ":"
                        + this.currentdate.getMinutes() + ":" + this.currentdate.getSeconds();
                    each.last_updated_on = this.datetime;
                }
            })
            tempData.map(each => {
                if(each.rowId == event.data.rowId){
                    each.last_updated_by = 'sripanig';
                    each.last_updated_on = this.datetime;
                    this.newlyAddedOrUpdatedRoles.some(e => e.rowId == event.data.rowId) ? this.newlyAddedOrUpdatedRoles[this.newlyAddedOrUpdatedRoles.findIndex(x => x.rowId == event.data.rowId)] = each : this.newlyAddedOrUpdatedRoles.push(each);
                    this.roleDataTemp.some(e => e.rowId == event.data.rowId) ? this.roleDataTemp[this.roleDataTemp.findIndex(x => x.rowId == event.data.rowId)] = each : this.roleDataTemp.push(each);
                }
            })
        }
    }

    saveRoles(){
        //Filter the newly added and updated roles from the initial Array of roles 'this.roleDataTemp'

        this.isRequestPending = true;
        this.dataAccessservice.saveRoles(this.newlyAddedOrUpdatedRoles).subscribe(data => {
            this.isRequestPending = false;
            this.alertOptions.show('Role(s) saved Successfully', "success");
            this.newlyAddedOrUpdatedRoles = [];
            this.getAllRoles();
        })
    }




}


