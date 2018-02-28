import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MainPlatformPageComponent} from './platform/components/main-platform-page/main-platform-page.component';
import {SecondPlatformPageComponent} from './platform/components/second-platform-page/second-platform-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {
    CuiAlertModule, CuiDialogModule, CuiDialogRef, CuiDialogService, CuiInputModule, CuiProgressbarModule,
    CuiSelectModule,
    CuiSpinnerModule
} from "@cisco-ngx/cui-components";
import {CheckboxModule, ContextMenuModule, DataTableModule, DropdownModule, TooltipModule} from "primeng/primeng";
import {AccessSetupComponent} from "./dip/components/access-setup/access-setup.component";
import {AccessCompanyComponent} from "./dip/components/access-setup/access-company/access-company.component";
import {AccessModulesComponent} from "./dip/components/access-setup/access-modules/access-modules.component";
import {AccessRolesComponent} from "./dip/components/access-setup/access-roles/access-roles.component";
import {RoleManagementComponent} from "./dip/components/access-setup/role-management/role-management.component";
import {HorizontalTabComponent} from "./dip/components/dip-shared/horizontal-tab/horizontal-tab.component";
import {TemplateUploadDownloadComponent} from "./dip/components/template-upload-download/template-upload-download.component";
import {TransactionsUploadComponent} from "./dip/components/transactions-upload/transactions-upload.component";
import {TemplateUploadDownloadService} from "./dip/components/template-upload-download/template-upload-download.service";
import {DataAccessService} from "./dip/components/access-setup/data-access.service";
import {HttpClientModule} from "@angular/common/http";
import { DipViewComponent } from './dip/components/dip-view/dip-view.component';
import {DipInitializerService} from "./dip/components/dip-shared/dip-initializer.service";
import {DipResolve} from "./dip/components/dip-shared/dip.resolve";
import { NewTransactionsComponent } from './dip/components/new-transactions/new-transactions.component';
import {ModulesAndRolesComponent
} from './dip/components/access-setup/modules-and-roles/modules-and-roles.component';
import { DefineFieldsModalComponent } from './dip/components/template-upload-download/define-fields-modal/define-fields-modal.component';

import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';

import { MyDealsComponent } from './platform/components/my-deals/my-deals.component';
import { AllDealsComponent } from './platform/components/all-deals/all-deals.component';
import { MethodologyComponent } from './platform/components/methodology/methodology.component';
import { LearninganddevelopmentComponent } from './platform/components/learninganddevelopment/learninganddevelopment.component';
import { InitiativesComponent } from './platform/components/initiatives/initiatives.component';
import { QuickToolsComponent } from './platform/components/quick-tools/quick-tools.component';
import { AllToolsComponent } from './platform/components/all-tools/all-tools.component';
import { DealService } from './platform/components/services/deal.service';
import { DealComponent } from './platform/components/deal/deal.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AnnouncementComponent } from './platform/components/announcement/announcement.component';
import { Configuration } from '../App.Config';



@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,

        MainPlatformPageComponent,
        SecondPlatformPageComponent,
        HorizontalTabComponent,
        AccessSetupComponent,
        AccessCompanyComponent,
        AccessModulesComponent,
        AccessRolesComponent,
        RoleManagementComponent,
        TemplateUploadDownloadComponent,
        TransactionsUploadComponent,
        DipViewComponent,
        NewTransactionsComponent,
        ModulesAndRolesComponent,
        DefineFieldsModalComponent,
        MyDealsComponent, AllDealsComponent, MethodologyComponent, LearninganddevelopmentComponent, 
        InitiativesComponent, QuickToolsComponent, AllToolsComponent, AnnouncementComponent,SidebarComponent,DealComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
        CuiInputModule,
        CuiAlertModule,
        DataTableModule,
        DropdownModule,
        CheckboxModule,
        ContextMenuModule,
        CuiDialogModule,
        CuiSpinnerModule,
        CuiProgressbarModule,
        CuiSelectModule,
        TooltipModule,
        HttpModule,HttpClientModule,
        NgxPaginationModule
    ],
    providers: [
        TemplateUploadDownloadService,
        DataAccessService,
        DipInitializerService,
        DipResolve,
        DealService,{provide : 'Configuration' , useValue: Configuration}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
