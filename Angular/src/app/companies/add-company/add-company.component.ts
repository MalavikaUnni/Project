import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
AddCompanyForm :FormGroup
      constructor(private formBuilder :FormBuilder,private companyService:CompanyService) { }
    
      ngOnInit() {
        this.AddCompanyForm = this.formBuilder.group({
          id :['',Validators.required],
          companyname:['',Validators.required],
          city:['',Validators.required],
          turnover:['',Validators.required],
          ceo :['',Validators.required]
    
      });
    
    }
    
    addUser()
    {
      this.companyService.saveUser(this.AddCompanyForm.value).subscribe( data =>{
        console.log("User inserted Successfully")
      });
      }
    
    
    onSubmit() {
      console.log(this.AddCompanyForm.value);
    }
    }
