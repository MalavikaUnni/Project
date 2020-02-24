import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IpoService } from '../../service/ipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.css']
})
export class UpdateIpoComponent implements OnInit {

  updateIpoForm:FormGroup
  constructor(private ipoService:IpoService,private router:Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.updateIpoForm=this.formBuilder.group({
      id:['',Validators.required],
      companyName:['',Validators.required],
      stockExchange:['',Validators.required],
      pricePerShare:['',Validators.required],
      noOfShares:['',Validators.required],
      openDateTime:['',Validators.required],
      remarks:['',Validators.required],
    });

    const id=localStorage.getItem('ipoId');
    if(+id>0){
      this.ipoService.getIpoById(+id).subscribe(ipo=>{
      this.updateIpoForm.patchValue(ipo);  
      });
    
  }
  }
  updateIpo()
    {
    this.ipoService.updateIpoInfo(this.updateIpoForm.value).subscribe(u => {
    this.router.navigate(['/list-ipo'])
    });
  }

}
