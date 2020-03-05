import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ManageexchangeComponent } from './admin/manageexchange/manageexchange.component';
import { UpdateIpoComponent } from './admin/update-ipo/update-ipo.component';
import { UserCompanySectorsComponent } from './user/user-company-sectors/user-company-sectors.component';
import { UserCompareCompaniesComponent } from './user/user-compare-companies/user-compare-companies.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './user/users/users.component';
import { UpdateUserComponent } from './user/user-update/user-update.component';
import { CompanyComponent } from './companies/company/company.component';
import { AddCompanyComponent } from './companies/add-company/add-company.component';
import { CompanyUpdateComponent } from './companies/company-update/company-update.component';
import { ImportDataComponent } from './admin/import-data/import-data.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CommonLoginComponent } from './login/common-login/common-login.component';
import { AddIpoComponent } from './admin/add-ipo/add-ipo.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { ListIpoComponent } from './admin/list-ipo/list-ipo.component';
import { ListExchangeComponent } from './admin/list-exchange/list-exchange.component';
import { UpdateExchangeComponent } from './admin/update-exchange/update-exchange.component';
import { AddStockPriceComponent } from './admin/add-stock-price/add-stock-price.component';
import { ListStockPriceComponent } from './admin/list-stock-price/list-stock-price.component';
import { UpdateStockPriceComponent } from './admin/update-stock-price/update-stock-price.component';
import { ActivateComponent } from './activate/activate.component';
import { AboutUsComponent } from './home/about-us/about-us.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ManageexchangeComponent,
    UpdateIpoComponent,
    UserCompanySectorsComponent,
    UserCompareCompaniesComponent,
    UsersComponent,
    UpdateUserComponent,
    CompanyComponent,
    AddCompanyComponent,
    CompanyUpdateComponent,
    ImportDataComponent,
    AdminHomeComponent,
    CommonLoginComponent,
    AddIpoComponent,
    UserHomeComponent,
    AdminLoginComponent,
    ListIpoComponent,
    ListExchangeComponent,
    UpdateExchangeComponent,
    AddStockPriceComponent,
    ListStockPriceComponent,
    UpdateStockPriceComponent,
    ActivateComponent,
    AboutUsComponent
    
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
