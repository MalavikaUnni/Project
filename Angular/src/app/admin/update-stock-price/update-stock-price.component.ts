import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StockPriceService } from 'src/app/service/stock-price.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-stock-price',
  templateUrl: './update-stock-price.component.html',
  styleUrls: ['./update-stock-price.component.css']
})
export class UpdateStockPriceComponent implements OnInit {

  updateStockForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private stockService:StockPriceService,private router:Router) { }

  ngOnInit() {
    this.updateStockForm=this.formBuilder.group({
      id:[],
      companyCode:['',Validators.required],
      stockExchange:['',Validators.required],
      currentPrice:['',Validators.required],
      date:['',Validators.required],
      time:['',Validators.required]
    });
    const id=localStorage.getItem('stockId');
    if(+id>0){
      this.stockService.getStockPriceById(+id).subscribe(stock=>{
        this.updateStockForm.patchValue(stock);
      });

    }
  
  }

  updateStockPrice()
  {
    this.stockService.updateStockPriceInfo(this.updateStockForm.value).subscribe(u=>{
    this.router.navigate(['/list-stock-price'])
    });
  }


}
