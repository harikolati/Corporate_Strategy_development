import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components needed for routes
import { MainDipPageComponent } from './dip/components/main-dip-page/main-dip-page.component';
import { MainPlatformPageComponent } from './platform/components/main-platform-page/main-platform-page.component';
import { SecondDipPageComponent } from './dip/components/second-dip-page/second-dip-page.component';
import { SecondPlatformPageComponent } from './platform/components/second-platform-page/second-platform-page.component';


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
  { path: 'dip', component: MainDipPageComponent },
  { path: 'dip/page2', component: SecondDipPageComponent },
  { path: '', redirectTo : 'MyDeals', pathMatch : 'full'},

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
