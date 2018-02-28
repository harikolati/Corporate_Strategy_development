import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataAccessService} from "../data-access.service";
import {MenuItem} from "primeng/primeng";

@Component({
    selector: 'app-access-modules',
    templateUrl: './access-modules.component.html',
    styleUrls: ['./access-modules.component.scss']
})
export class AccessModulesComponent implements OnInit {
    @ViewChild('moduleTable') moduleTableRef: ElementRef;
    private fieldArray: Array<any> = [];
    private newAttribute: any = {};
    private datetime;
    private currentdate;
    public moduleData:any = [];
    public moduleDataCopy:any = [];
    public moduleDataTemp:any = [];
    public newlyAddedOrUpdatedModules = [];
    isRequestPending:boolean = false;
    alertOptions = {
        "msg": "",
        "severity": "info",
        "show": null,
        "hide": null
    }
    selectedModules:any = [];
    items:MenuItem[];
    constructor(private dataAccessservice: DataAccessService, public elementRef:ElementRef) {
    }

    ngOnInit() {
        this.currentdate = new Date();
        this.getAllModules();
        this.datetime = this.currentdate.getMonth() + 1 + "/" + this.currentdate.getDate()
            + "/" + this.currentdate.getFullYear() + "  "
            + this.currentdate.getHours() + ":"
            + this.currentdate.getMinutes() + ":" + this.currentdate.getSeconds();
        this.newAttribute = {module: '', updatedBy: 'sripanig', updatedOn: this.datetime};
    }

    getAllModules() {
        this.isRequestPending = true;
        this.dataAccessservice.getAllModules().subscribe(data => {
            this.isRequestPending = false;
            this.moduleData = data;
            this.moduleData = this.newlyAddedOrUpdatedModules.length ? this.mergeNewlyAddedWithExistingModules() : this.moduleData;
            this.moduleData.map((each, index) => {
                each.rowId = index;
                each.newlyAdded = false;
            })
            this.moduleDataTemp  = this.moduleData.map(x => Object.assign({}, x));
        })
    }
    mergeNewlyAddedWithExistingModules(){
        let tempNewlyAddedOrUpdated = this.newlyAddedOrUpdatedModules.map(x => Object.assign({}, x));
        this.moduleData = this.moduleData.filter(m =>  !tempNewlyAddedOrUpdated.some(b => b.module_id == m.module_id));
        this.moduleData = this.moduleData.concat(tempNewlyAddedOrUpdated);
        console.log(this.moduleData);
        console.log(this.newlyAddedOrUpdatedModules);
        return this.moduleData;
    }

    addNewModule(){
        let emptyRow = this.moduleData.some(each => {
            return each.last_updated_by == '';
        })
        if(!emptyRow){
            this.moduleData = [...this.moduleData, {module_name:'', last_updated_by:'', last_updated_on:'', rowId:this.moduleData.length, active_flag:false, newlyAdded:true}]
        }
        let Id = (this.moduleData.length - 1).toString() + 'module';
        let tableHeight = this.moduleTableRef.nativeElement.offsetHeight;
        if(tableHeight >= 400){
            setTimeout(()=> {
                const element = this.elementRef.nativeElement.ownerDocument.getElementById(Id);
                element.scrollIntoView({behaviour:'smooth'});
            }, 100);
        }
        //el.scrollTop = el.scrollHeight;
    }

    deleteSelectedModule(module){
        //CAll the delete service if the module_name is not empty

        /*let modulesToDeleteInServer = this.selectedModules.filter(e =>  {return e.hasOwnProperty("module_id")});
        console.log(modulesToDeleteInServer);
        let newlyAddedModulesToDelete = this.selectedModules.filter(e => {return !e.hasOwnProperty("module_id")});

        if(modulesToDeleteInServer.length){
            this.isRequestPending = true;
            this.newlyAddedOrUpdatedModules = this.newlyAddedOrUpdatedModules.filter(o1 => !modulesToDeleteInServer.some(o2 => o1.rowId === o2.rowId));
            this.dataAccessservice.deleteModule(modulesToDeleteInServer).subscribe(data => {
                this.isRequestPending = false;
                this.alertOptions.show('Module(s) deleted successfully', "success");
                this.getAllModules();
            })
        }
        if(newlyAddedModulesToDelete.length){
            newlyAddedModulesToDelete.map(module => {
                var index = this.moduleData.findIndex(each => {
                    return each.rowId == module.rowId;
                })
                if (index !== -1) {
                    this.moduleDataCopy = Object.assign([], this.moduleData);
                    this.moduleDataCopy.splice(index, 1);
                    this.moduleData = this.moduleDataCopy;
                }
            })
            this.newlyAddedOrUpdatedModules = this.newlyAddedOrUpdatedModules.filter(o1 => !newlyAddedModulesToDelete.some(o2 => o1.rowId === o2.rowId));
        }*/
        console.log(this.moduleData)
        console.log(module);
        var index = this.moduleData.findIndex(each => {
            return each.rowId == module.rowId;
        })
        if (index !== -1) {
            this.moduleDataCopy = Object.assign([], this.moduleData);
            this.moduleDataCopy.splice(index, 1);
            this.moduleData = this.moduleDataCopy;
        }
        this.selectedModules = [];
        this.newlyAddedOrUpdatedModules = this.newlyAddedOrUpdatedModules.filter(o1 => module.rowId != o1.rowId);

        /*else{
            // If the module name is empty delete it from the array

        }*/

    }

    statusChanged(row, event){
        let rowId = row.rowId;
        if(row.module_name){
            let tempData = this.moduleData.map(x => Object.assign({}, x));
            tempData.map(each => {
                if(each.rowId == rowId){
                    each.active_flag = event;
                    this.newlyAddedOrUpdatedModules.some(e => e.rowId == rowId) ? this.newlyAddedOrUpdatedModules[this.newlyAddedOrUpdatedModules.findIndex(x => x.rowId == rowId)] = each : this.newlyAddedOrUpdatedModules.push(each);
                    this.moduleDataTemp.some(e => e.rowId == rowId) ? this.moduleDataTemp[this.moduleDataTemp.findIndex(x => x.rowId == rowId)] = each : this.moduleDataTemp.push(each);
                }
            })
        }
    }

    onEditComplete(event){
        let newModuleName = event.data.module_name;
        let alreadyExists;
        // Check if the module_name already exists in the array. except the current row.
        alreadyExists = this.moduleData.some((each, index) => {
            return (each.module_name.toLowerCase() == newModuleName.toLowerCase() && each.rowId != event.data.rowId);
        });
        if(alreadyExists){
            this.alertOptions.show('Module name ' + newModuleName + ' already exists. Please enter a different module name', "danger");
            //this.staticModal.showModal('Module name ' + newModuleName + ' already exists. Please enter a different module name')
            //Check if the last_updated_by key is empty i.e newly added module
            if(!event.data.last_updated_by){
                // remove the object from the array if module_name already exists.
                var index = this.moduleData.findIndex(each => {
                    return each.last_updated_by == '';
                })
                if (index !== -1) {
                    this.moduleDataCopy = Object.assign([], this.moduleData);
                    this.moduleDataCopy.splice(index, 1);
                    this.moduleData = this.moduleDataCopy;
                }
            }
            else{
                //Revert back to old value if the module_name already exists.
                // Filter the object from the initial Array by comparing rowId.
                let newlyAddedModulesCopy = this.moduleDataTemp.map(x => Object.assign({}, x));
                let oldObject = newlyAddedModulesCopy.filter(each => {
                    return each.rowId == event.data.rowId
                })[0]
                //let newlyAddedModulesCopy = this.newlyAddedOrUpdatedModules.map(x => Object.assign({}, x));
                //console.log(newlyAddedModulesCopy)
                //oldObject = oldObject ? oldObject : newlyAddedModulesCopy.filter(m => m.rowId == event.data.rowId )[0];
                // Assign the initial module_name back
                this.moduleData.map(each => {
                    if(each.rowId == event.data.rowId){
                        each.module_name = oldObject.module_name;
                    }
                })

            }
        }
        else{

            let tempData = this.moduleData.map(x => Object.assign({}, x));
            this.moduleData.map(each => {
                if(each.rowId == event.data.rowId){
                    each.module_name = each.module_name.toUpperCase();
                    each.last_updated_by = 'sripanig';
                    this.currentdate = new Date();
                    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                    ];

                    this.datetime = monthNames[this.currentdate.getMonth() + 1] + "-" + this.currentdate.getDate()
                        + "-" + this.currentdate.getFullYear() + "  "
                        + this.currentdate.getHours() + ":"
                        + this.currentdate.getMinutes() + ":" + this.currentdate.getSeconds();
                    each.last_updated_on = this.datetime;
                    //this.newlyAddedOrUpdatedModules.push(each);
                }
            })
            tempData.map(each => {
                if(each.rowId == event.data.rowId){
                    each.last_updated_by = 'sripanig';
                    each.last_updated_on = this.datetime;
                    this.newlyAddedOrUpdatedModules.some(e => e.rowId == event.data.rowId) ? this.newlyAddedOrUpdatedModules[this.newlyAddedOrUpdatedModules.findIndex(x => x.rowId == event.data.rowId)] = each : this.newlyAddedOrUpdatedModules.push(each);
                    this.moduleDataTemp.some(e => e.rowId == event.data.rowId) ? this.moduleDataTemp[this.moduleDataTemp.findIndex(x => x.rowId == event.data.rowId)] = each : this.moduleDataTemp.push(each);
                }
            })
        }
    }

    saveModules(){
        //Filter the newly added and updated modules from the initial Array of modules 'this.moduleDataTemp'
        /*let newlyAddedOrModifiedModules = this.moduleData.filter(o1 => !this.moduleDataTemp.some(o2 => o1.module_name === o2.module_name));
        newlyAddedOrModifiedModules.forEach(function(v){ delete v.rowId });*/
        this.isRequestPending = true;
        this.dataAccessservice.saveModule(this.newlyAddedOrUpdatedModules).subscribe(data => {
            //this.staticModal.showModal('Successfully saved your changes');
            this.isRequestPending = false;
            this.alertOptions.show('Module(s) saved successfully', "success");
            this.newlyAddedOrUpdatedModules = [];
            this.getAllModules();
        })
    }




}


