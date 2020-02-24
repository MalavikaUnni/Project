import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExchangeService } from 'src/app/service/exchange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-exchange',
  templateUrl: './update-exchange.component.html',
  styleUrls: ['./update-exchange.component.css']
})
export class UpdateExchangeComponent implements OnInit {
  updateExchangeForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private exchangeService:ExchangeService,private router:Router) { }

  ngOnInit() {
    this.updateExchangeForm=this.formBuilder.group({
      id:[],
      exchangeName:['',Validators.required],
      contactAddress:['',Validators.required],
      brief:['',Validators.required],
      remarks:['',Validators.required]
    });
    const id=localStorage.getItem('exchangeId');
    if(+id>0){
      this.exchangeService.getExchangeById(+id).subscribe(exchange=>{
        this.updateExchangeForm.patchValue(exchange);
      });

    }
  
  }

  updateExchange()
  {
    this.exchangeService.updateExchangeInfo(this.updateExchangeForm.value).subscribe(u=>{
    this.router.navigate(['/list-exchange'])
    });
  }

}
