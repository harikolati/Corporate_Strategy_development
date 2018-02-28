import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Http} from "@angular/http";
import {DataAccessService} from "../data-access.service";
import {MenuItem} from "primeng/primeng";

@Component({
    selector: 'app-role-management',
    templateUrl: './role-management.component.html',
    styleUrls: ['./role-management.component.scss']
})
export class RoleManagementComponent implements OnInit {
    selectedCities: string[] = [];

    selectedCategories: string[] = ['Technology', 'Sports'];

    checked: boolean = false;
    private fieldArray: Array<any> = [];
    private newAttribute: any = {};
    private datetime;
    private currentdate;
    public moduleData:any = [];
    public accessData:any = [];
    public moduleName:any = [];
    public roleData:any = [];
    public roleName:any = [];
    public companyData:any = [];
    public companyName:any = [];
    public accessDataCopy:any = [];
    public accessDataTemp:any = [];
    public newUserID;
    public newModuleName;
    public newRoleName;
    public newCompanyName;
    public editAccess:any = [];
    public initialAccessData:any = [];
    public newlyAddedOrUpdatedAccessData = [];
    public value:boolean = true;
    isRequestPending:boolean = false;
    alertOptions = {
        "msg": "",
        "severity": "info",
        "show": null,
        "hide": null
    }
    constructor(private dataAccessservice: DataAccessService, public elementRef:ElementRef) {
    }

    ngOnInit() {
        this.currentdate = new Date();
        this.getAllUserAccess();
        this.getAllModules();
        this.getAllRoles();
        this.getAllCompany();

        this.datetime = this.currentdate.getMonth() + 1 + "/" + this.currentdate.getDate()
            + "/" + this.currentdate.getFullYear() + "  "
            + this.currentdate.getHours() + ":"
            + this.currentdate.getMinutes() + ":" + this.currentdate.getSeconds();
        this.newAttribute = {module: '', updatedBy: 'sripanig', updatedOn: this.datetime};


    }
    getAllUserAccess(){
        this.isRequestPending = true;
        this.dataAccessservice.getAllUserAccess().subscribe(data => {
            this.isRequestPending = false;
            this.accessData = data;
            this.accessData = this.newlyAddedOrUpdatedAccessData.length ? this.mergeNewlyAddedWithExistingAccessData() : this.accessData;
            this.accessData.map((each, index) => {
                each.rowId = index;
                this.editAccess[index]=false;
            })
            this.accessDataTemp  = this.accessData.map(x => Object.assign({}, x));
        })
        this.isRequestPending = false;
    }
    getAllModules() {
        this.isRequestPending = true;
        this.dataAccessservice.getAllModules().subscribe(data => {
            this.isRequestPending = false;
            this.moduleData = data;
        })
        this.isRequestPending = false;
    }
    getAllRoles() {
        this.isRequestPending = true;
        this.dataAccessservice.getAllRoles().subscribe(data => {
            this.isRequestPending = false;
            this.roleData = data;
        })
    }
    getAllCompany() {
        this.isRequestPending = true;
        this.dataAccessservice.getAllCompany().subscribe(data => {
            this.isRequestPending = false;
            this.companyData = data;
        })
    }
    mergeNewlyAddedWithExistingAccessData(){
        let tempNewlyAddedOrUpdated = this.newlyAddedOrUpdatedAccessData.map(x => Object.assign({}, x));
        this.accessData = this.accessData.filter(m =>  !tempNewlyAddedOrUpdated.some(b => b.user_id == m.user_id));
        this.accessData = this.accessData.concat(tempNewlyAddedOrUpdated);
        return this.accessData;
    }

    addUserAccess(){

        let emptyRow = this.accessData.some(each => {
            return each.user_id == '';

        })
        if(!emptyRow){
            this.accessData = [...this.accessData, {user_id:'', module_name:'', role_name:'',acquisition_name:'',acquisition_no:'',active_flag:false, rowId:this.accessData.length}]
            this.editAccess[this.accessData.length-1] = true;
        }
        let Id = (this.accessData.length - 1).toString() + 'access';
        setTimeout(()=> {
            const element = this.elementRef.nativeElement.ownerDocument.getElementById(Id);
            element.scrollIntoView({behaviour:'smooth'});
        }, 100);
        //el.scrollTop = el.scrollHeight;
    }

    saveUserAccess(){
        //Filter the newly added and updated modules from the initial Array of modules 'this.moduleDataTemp'
        /*let newlyAddedOrModifiedModules = this.moduleData.filter(o1 => !this.moduleDataTemp.some(o2 => o1.module_name === o2.module_name));
        newlyAddedOrModifiedModules.forEach(function(v){ delete v.rowId });*/
        this.isRequestPending = true;
        this.newlyAddedOrUpdatedAccessData.map(e => {
            e.module_id = this.moduleData.filter(m => m.module_name == e.module_name)[0] ? this.moduleData.filter(m => m.module_name == e.module_name)[0].module_id : '';
            e.role_id = this.roleData.filter(r => r.role_name == e.role_name)[0].role_id;
            e.acquisition_no = this.companyData.filter(c => c.acquisition_name == e.acquisition_name)[0] ? this.companyData.filter(c => c.acquisition_name == e.acquisition_name)[0].acquisition_no : (e.acquisition_no ? e.acquisition_no : '');
            e.created_by ? e.created_by = e.created_by : e.created_by = 'sripanig';
            e.created_on ? e.created_on = e.created_on : e.created_on = new Date().toDateString();
            e.last_modified_on = 'sripanig';
            e.last_modified_by = new Date().toDateString();

        })
        console.log("new data",this.newlyAddedOrUpdatedAccessData)
        this.dataAccessservice.saveUserAccess(this.newlyAddedOrUpdatedAccessData).subscribe(data => {
            //this.staticModal.showModal('Successfully saved your changes');
            this.isRequestPending = false;
            this.alertOptions.show('User Access saved successfully', "success");
            this.newlyAddedOrUpdatedAccessData = [];
            this.getAllUserAccess();
        })
    }

    onEditComplete(userId, module, role, company, id){
        console.log(userId);
        if(userId){
            let accessDataCopy = Object.assign([], this.accessData);
            accessDataCopy[accessDataCopy.findIndex(x => x.rowId == id)].user_id = userId;
            this.accessData = accessDataCopy;
        }
        let newUserID = userId;
        let newModuleName = module;
        let newRoleName = role;
        let newCompanyName = company;
        let rowId = id;

        let alreadyExists;

        // Check if the module_name already exists in the array. except the current row.
        alreadyExists = this.checkExisting(newUserID, newModuleName, newRoleName, newCompanyName, rowId);
        if(alreadyExists){
            console.log('Yes exitss')
            this.alertOptions.show('This record already exists. Please enter a different record', "danger");
            //this.staticModal.showModal('Module name ' + newModuleName + ' already exists. Please enter a different module name')
            //Check if the last_updated_by key is empty i.e newly added module
            //Revert back to old value if the module_name already exists.
            // Filter the object from the initial Array by comparing rowId.
            let newlyAddedAccessDataCopy = this.accessDataTemp.map(x => Object.assign({}, x));
            //let newlyAddedModulesCopy = this.newlyAddedOrUpdatedModules.map(x => Object.assign({}, x));
            //console.log(newlyAddedModulesCopy)
            //oldObject = oldObject ? oldObject : newlyAddedModulesCopy.filter(m => m.rowId == event.data.rowId )[0];
            // Assign the initial module_name back
            this.accessData.map(each => {
                if(each.rowId == rowId){
                    each.user_id = '';
                    each.module_name = '';
                    each.role_name = '';
                    each.acquisition_name = '';
                }
            })
        }
        else{
            console.log('not there');
            let tempData = this.accessData.map(x => Object.assign({}, x));
            tempData.map(each => {
                if((each.rowId == rowId && newRoleName && newModuleName && newCompanyName && newUserID) || (each.rowId == rowId && newUserID && newRoleName && newRoleName.toLowerCase() == 'super user')){
                    this.newlyAddedOrUpdatedAccessData.some(e => e.rowId == rowId) ? this.newlyAddedOrUpdatedAccessData[this.newlyAddedOrUpdatedAccessData.findIndex(x => x.rowId == rowId)] = each : this.newlyAddedOrUpdatedAccessData.push(each);
                    this.accessDataTemp.some(e => e.rowId == rowId) ? this.accessDataTemp[this.accessDataTemp.findIndex(x => x.rowId == rowId)] = each : this.accessDataTemp.push(each);
                }
            })
            console.log(this.newlyAddedOrUpdatedAccessData);
            console.log(this.accessDataTemp);
        }
    }
    checkExisting(newUserID, newModuleName, newRoleName, newCompanyName, rowId){
        console.log(newUserID + '' + newModuleName + '' + newRoleName + '' + newCompanyName)
        if(newUserID && newModuleName && newRoleName && newCompanyName){
            return this.accessDataTemp.some((each, index) => {
                return(each.user_id.toLowerCase() == newUserID.toLowerCase()  && each.module_name.toLowerCase() == newModuleName.toLowerCase()  && each.role_name.toLowerCase() == newRoleName.toLowerCase()  && each.acquisition_name.toLowerCase() == newCompanyName.toLowerCase() && each.rowId != rowId)
            });
        }
        else if(newUserID && newRoleName && newRoleName.toLowerCase() == 'super user'){
            return this.accessDataTemp.some((each, index) => {
                return(each.user_id.toLowerCase() == newUserID.toLowerCase()    && each.role_name.toLowerCase() == newRoleName.toLowerCase()  && each.rowId != rowId)
            });
        }
        else{
            return false;
        }
    }

    statusChanged(rowId, event){
        console.log(event)
        let tempData = this.accessData.map(x => Object.assign({}, x));
        tempData.map(each => {
            if(each.rowId == rowId){
                each.active_flag = event;
                this.newlyAddedOrUpdatedAccessData.some(e => e.rowId == rowId) ? this.newlyAddedOrUpdatedAccessData[this.newlyAddedOrUpdatedAccessData.findIndex(x => x.rowId == rowId)] = each : this.newlyAddedOrUpdatedAccessData.push(each);
                this.accessDataTemp.some(e => e.rowId == rowId) ? this.accessDataTemp[this.accessDataTemp.findIndex(x => x.rowId == rowId)] = each : this.accessDataTemp.push(each);
            }
        })

        console.log(this.newlyAddedOrUpdatedAccessData);
    }

}


