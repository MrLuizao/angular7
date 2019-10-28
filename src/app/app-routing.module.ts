import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/users/login/login.component';
import { TransfersComponent } from './components/transfers/transfers.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ApisComponent } from './components/apis/apis.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'transfers', component: TransfersComponent },
  { path: 'apis', component: ApisComponent },
  // { path: 'my-pie-chart', component: MyPieChartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
