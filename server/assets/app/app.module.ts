import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./common/header/header.component";
import { FooterComponent } from "./common/footer/footer.component";
import { SidebarComponent } from "./common/sidebar/sidebar.component";
import { SearchComponent } from "./common/search/search.component";
import { AnnouncementComponent } from "./common/announcement/announcement.component";
import { DealComponent } from "./deals/deal.component";
import { DealListComponent } from "./deals/deal-list.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        DealComponent,
        DealListComponent,
        SearchComponent,
        AnnouncementComponent
    ],
    imports: [BrowserModule,HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}