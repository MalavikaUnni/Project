import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { IpoService } from 'src/app/service/ipo.service';

@Component({
  selector: 'app-add-ipo',
  templateUrl: './add-ipo.component.html',
  styleUrls: ['./add-ipo.component.css']
})
export class AddIpoComponent implements OnInit {

  addIpoForm:FormGroup
  constructor(private formBuilder:FormBuilder,private ipoService:IpoService,private router:Router) { }

  ngOnInit() {
    this.addIpoForm=this.formBuilder.group({
      companyName:['',Validators.required],
      stockExchange:['',Validators.required],
      pricePerShare:['',Validators.required],
      noOfShares:['',Validators.required],
      openDateTime:['',Validators.required],
      remarks:['',Validators.required]
    });
  }
  
  addIpo(){
    this.ipoService.saveIpo(this.addIpoForm.value).subscribe(d=>{
    //  console.log("inserted successfully");
      this.router.navigate(['/list-ipo']);
    })

  }
}
