import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ImportdataComponent } from './importdata/importdata.component';
import { ManagecompaniesComponent } from './companies/managecompanies/managecompanies.component';
import { ManageexchangeComponent } from './manageexchange/manageexchange.component';
import { UpdateIpoComponent } from './update-ipo/update-ipo.component';
import { UserCompanySectorsComponent } from './user-company-sectors/user-company-sectors.component';
import { UserCompareCompaniesComponent } from './user-compare-companies/user-compare-companies.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './user/users/users.component';
import { UpdateUserComponent } from './user/user-update/user-update.component';
import { CompanyComponent } from './companies/company/company.component';
import { AddCompanyComponent } from './companies/add-company/add-company.component';
import { CompanyUpdateComponent } from './companies/company-update/company-update.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ImportdataComponent,
    ManagecompaniesComponent,
    ManageexchangeComponent,
    UpdateIpoComponent,
    UserCompanySectorsComponent,
    UserCompareCompaniesComponent,
    UsersComponent,
    UpdateUserComponent,
    CompanyComponent,
    AddCompanyComponent,
    CompanyUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
