import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TransfersComponent } from './components/transfers/transfers.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/users/login/login.component';
import { FormsModule} from '@angular/forms';
import { environment } from '../environments/environment';


import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

import { ChartsModule } from 'ng2-charts';
import { Routes, RouterModule } from '@angular/router';

import { AngularFirestore } from '@angular/fire/firestore';
import { RegisterComponent } from './components/users/register/register.component';
import { ApisComponent } from './components/apis/apis.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TransfersComponent,
    ModalComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ApisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule, 
    ChartsModule
    ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
