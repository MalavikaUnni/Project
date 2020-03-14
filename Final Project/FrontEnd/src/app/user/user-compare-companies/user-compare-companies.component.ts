import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/service/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-compare-companies',
  templateUrl: './user-compare-companies.component.html',
  styleUrls: ['./user-compare-companies.component.css']
})
export class UserCompareCompaniesComponent implements OnInit {
  

  compareCompany:FormGroup;
  companies:Company[];
  constructor(private companyservice: CompanyService, private formBuilder: FormBuilder,private router:Router) { }
  ngOnInit() {
    this.compareCompany=this.formBuilder.group({
      "selectCompany":['',Validators.required],
      "selectStock":['',Validators.required],
      "companyName1":['',Validators.required],
      "companyName2":['',Validators.required],
      "from_period":['',Validators.required],
      "to_period":['',Validators.required]
    });
    this.companyservice.getAllCompany().subscribe(data=>{
      this.companies=data;
    });
  }
  onSubmit(){
    this.router.navigate(["user-landing/charts"],{
      queryParams:{
        formData:JSON.stringify(this.compareCompany.value)
      }
    })
  }
}









  
  //ngOnInit() {

//     this.comparecompany = this.formBuilder.group({
//       company: [''],
//       company2: ['']
//     });
//     this.companyservice.getAllCompany().subscribe(data => {
//       this.companyList = data;
//       console.log(this.companyList)
//     });
//   }

//   onSubmit()
//   {
//     this.router.navigate(["/result"], {
//       queryParams: {
//         formData:JSON.stringify(this.comparecompany.value)
//       }
//     });
//   }

// }
