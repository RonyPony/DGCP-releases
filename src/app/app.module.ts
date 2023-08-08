import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './screens/home/home.component';
import { ByYearComponent } from './screens/by-year/by-year.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReleaseDetailComponent } from './screens/release-detail/release-detail.component';
import { ReleaseDetailsInfoComponent } from './components/release-details-info/release-details-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    ByYearComponent,
    ReleaseDetailComponent,
    ReleaseDetailsInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
