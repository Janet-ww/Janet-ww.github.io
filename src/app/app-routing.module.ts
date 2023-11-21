import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SmsComponent } from './sms/sms.component';
import { OnlinepaymentComponent } from './onlinepayment/onlinepayment.component';
import { UssdComponent } from './ussd/ussd.component';
import { AirtimeComponent } from './airtime/airtime.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sms', component: SmsComponent },
  { path: 'onlinepayment', component: OnlinepaymentComponent },
  { path: 'ussd', component: UssdComponent },
  { path: 'airtime', component: AirtimeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
