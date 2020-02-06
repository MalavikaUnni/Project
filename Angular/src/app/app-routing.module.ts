import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UsersComponent } from './user/users/users.component';
import{ UpdateUserComponent} from './user/user-update/user-update.component';
import { AddCompanyComponent } from './companies/add-company/add-company.component';
import { CompanyComponent } from './companies/company/company.component';
import { CompanyUpdateComponent } from './companies/company-update/company-update.component';
import { ImportDataComponent } from './admin/import-data/import-data.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CommonLoginComponent } from './login/common-login/common-login.component';
import { ManageexchangeComponent } from './admin/manageexchange/manageexchange.component';
import { AddIpoComponent } from './admin/add-ipo/add-ipo.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserCompareCompaniesComponent } from './user/user-compare-companies/user-compare-companies.component';
import { UserCompanySectorsComponent } from './user/user-company-sectors/user-company-sectors.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';

const routes: Routes = [
   { path: 'login', component: LoginComponent },
   {path :'home' ,component:HomeComponent},
   {path :'sign-up' , component:SignUpComponent},
   {path:'users' ,component:UsersComponent},
   {path : 'user-update', component:UpdateUserComponent},
   {path :'add-company',component:AddCompanyComponent},
    {path:'company' ,component:CompanyComponent},
    {path:'company-update', component:CompanyUpdateComponent},
    {path:'import-data', component:ImportDataComponent},
    {path :'admin-home', component:AdminHomeComponent},
    {path : '' , component:CommonLoginComponent},
    {path : 'manageexchange',component:ManageexchangeComponent},
    {path : 'add-ipo' ,component:AddIpoComponent},
    {path :'user-home',component:UserHomeComponent},
    {path:'user-compare-companies',component:UserCompareCompaniesComponent},
    {path :'user-compare-sectors',component:UserCompanySectorsComponent},
    {path:'admin-login' ,component:AdminLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
