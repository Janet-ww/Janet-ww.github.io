import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SmsComponent } from './sms/sms.component';
import { OnlinepaymentComponent } from './onlinepayment/onlinepayment.component';
import { UssdComponent } from './ussd/ussd.component';
import { AirtimeComponent } from './airtime/airtime.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SmsComponent,
    OnlinepaymentComponent,
    UssdComponent,
    AirtimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
