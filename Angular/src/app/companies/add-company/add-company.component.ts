import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../service/company.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
AddCompanyForm :FormGroup
      constructor(private formBuilder :FormBuilder,private companyService:CompanyService,private router:Router) { }
    
      ngOnInit() {
        this.AddCompanyForm = this.formBuilder.group({
          
          name:['',Validators.required],
          city:['',Validators.required],
          turnOver:['',Validators.required],
          sector:['',Validators.required],
          ceoName :['',Validators.required]
    
      });
    
    }
    
    addCompany()
    {
      this.companyService.saveCompany(this.AddCompanyForm.value).subscribe( data =>{
        //console.log("Company inserted Successfully")
       this.router.navigate(['/company']); 
      });
      }
    
    
    onSubmit() {
      //console.log(this.AddCompanyForm.value);
    }
    }
