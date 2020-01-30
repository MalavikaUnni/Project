import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company.service';
import {Company} from '../../models/company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private companyService: CompanyService,private router:Router) { }
  companies:Company[]
  ngOnInit() {
    this.companyService.getAllCompany().subscribe(data => {
      this.companies =data;
    });
  }

deleteCompany(company:Company)
{
  this.companyService.deletecompany(company.id).subscribe();
  this.companies=this.companies.filter(c=> c!== company);
} 
}