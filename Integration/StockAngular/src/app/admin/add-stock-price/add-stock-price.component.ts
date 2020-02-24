import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StockPriceService } from 'src/app/service/stock-price.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-stock-price',
  templateUrl: './add-stock-price.component.html',
  styleUrls: ['./add-stock-price.component.css']
})
export class AddStockPriceComponent implements OnInit {

  AddStockForm :FormGroup
      constructor(private formBuilder :FormBuilder,private StockService:StockPriceService,private router:Router) { }
      ngOnInit() {
        this.AddStockForm = this.formBuilder.group({
          companyCode:['',Validators.required],
          stockExchange:['',Validators.required],
          currentPrice:['',Validators.required],
          date :['',Validators.required],
          time :['',Validators.required]
      });
    }
    addStockPrice()
    {
      this.StockService.saveStockPrice(this.AddStockForm.value).subscribe( data =>{
        console.log("Company inserted Successfully")
       this.router.navigate(['/admin-home']); 
      });
      }
    onSubmit() {
      console.log(this.AddStockForm.value);
    }
}
