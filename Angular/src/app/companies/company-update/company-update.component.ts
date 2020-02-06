import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompanyService } from 'src/app/service/company.service';
import {Company} from '../../models/company';
import { Router } from '@angular/router';



@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.css']
})
export class CompanyUpdateComponent implements OnInit {
  updateCompany :FormGroup;
  constructor(private formBuiler : FormBuilder,private companyService:CompanyService,private router :Router) { }

  ngOnInit() {
    this.updateCompany=this.formBuiler.group({
      id:[],
      companyname:['',Validators.required],
      city:['',Validators.required],
      turnover:['',Validators.required],
      ceo:['',Validators.required]
    });
    const id=localStorage.getItem('companyId');
    if(+id > 0) {
      this.companyService.getCompanyById(+id).subscribe(user=>{
        this.updateCompany.patchValue(user);
      });
    }
  }
  updateTheCompany()
  {
  this.companyService.updateCompanyInfo(this.updateCompany.value).subscribe(u => {
  this.router.navigate(['/company']);
  });

  }
}