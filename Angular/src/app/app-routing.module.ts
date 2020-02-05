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

const routes: Routes = [
   { path: 'login', component: LoginComponent },
   {path :'' ,component:HomeComponent},
   {path :'sign-up' , component:SignUpComponent},
   {path:'users' ,component:UsersComponent},
   {path : 'user-update', component:UpdateUserComponent},
   {path :'add-company',component:AddCompanyComponent},
    {path:'company' ,component:CompanyComponent},
    {path:'company-update', component:CompanyUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
