import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ActionsheetsComponent } from './components/actionsheets/actionsheets.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { BadgesComponent } from './components/badges/badges.component';
import { HomeComponent } from './components/home/home.component';
import { MobileComponent } from './components/mobile/mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ActionsheetsComponent,
    AlertsComponent,
    BadgesComponent,
    HomeComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
