import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components needed for routes
import { MainPlatformPageComponent } from './platform/components/main-platform-page/main-platform-page.component';
import { SecondPlatformPageComponent } from './platform/components/second-platform-page/second-platform-page.component';
import {TemplateUploadDownloadComponent} from "./dip/components/template-upload-download/template-upload-download.component";
import {AccessSetupComponent} from "./dip/components/access-setup/access-setup.component";
import {AccessModulesComponent} from "./dip/components/access-setup/access-modules/access-modules.component";
import {AccessRolesComponent} from "./dip/components/access-setup/access-roles/access-roles.component";
import {AccessCompanyComponent} from "./dip/components/access-setup/access-company/access-company.component";
import {RoleManagementComponent} from "./dip/components/access-setup/role-management/role-management.component";
import {TransactionsUploadComponent} from "./dip/components/transactions-upload/transactions-upload.component";
import {DipViewComponent} from "./dip/components/dip-view/dip-view.component";
import {DipResolve} from "./dip/components/dip-shared/dip.resolve";
import {NewTransactionsComponent} from "./dip/components/new-transactions/new-transactions.component";
import {ModulesAndRolesComponent} from "./dip/components/access-setup/modules-and-roles/modules-and-roles.component";


import { MyDealsComponent } from './platform/components/my-deals/my-deals.component';
import { AllDealsComponent } from './platform/components/all-deals/all-deals.component';
import { MethodologyComponent } from './platform/components/methodology/methodology.component';
import { LearninganddevelopmentComponent } from './platform/components/learninganddevelopment/learninganddevelopment.component';
import { InitiativesComponent } from './platform/components/initiatives/initiatives.component';
import { QuickToolsComponent } from './platform/components/quick-tools/quick-tools.component';
import { AllToolsComponent } from './platform/components/all-tools/all-tools.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { AnnouncementComponent } from './platform/components/announcement/announcement.component';


// GOOD Arctile about child routes -> http://onehungrymind.com/named-router-outlets-in-angular-2/
export const routes: Routes = [
  //{ path: '', redirectTo: 'hub', pathMatch: 'full' },
  { path: 'hub', component: MainPlatformPageComponent, },
  { path: 'hub/page2', component: SecondPlatformPageComponent, },
    {path:'dip', component:DipViewComponent, resolve: {
        'token':DipResolve
    }, children: [
        { path: '', redirectTo: 'upload', pathMatch: 'full' },
        {path:'upload', component:TemplateUploadDownloadComponent},
        {path:'transactions', component:NewTransactionsComponent},
        {path: 'admin', component:AccessSetupComponent, children: [
            { path: '', redirectTo: 'modules-roles', pathMatch: 'full' },
            {path: 'modules-roles', component: ModulesAndRolesComponent},
            {path: 'company', component: AccessCompanyComponent},
            {path: 'access-management', component: RoleManagementComponent}
        ]},
    ]},
      { path: '', redirectTo: 'MyDeals', pathMatch: 'full' },
      { path: 'MyDeals', component: MyDealsComponent },
      { path: 'AllDeals', component: AllDealsComponent },
      { path: 'Methodology', component: MethodologyComponent },
      { path: 'LearningandDevelopment', component: LearninganddevelopmentComponent },
      { path: 'Initiatives', component: InitiativesComponent },
      { path: 'QuickTools', component: QuickToolsComponent},
      { path: 'AllTools', component: AllToolsComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
