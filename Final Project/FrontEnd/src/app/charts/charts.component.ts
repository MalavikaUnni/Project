import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { StockPriceService } from '../service/stock-price.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

   compareData:any;
   constructor(private stockPriceService: StockPriceService, private route: ActivatedRoute) { }
   chartOne = Highcharts;
   chartOneOptions: any;
   getFirstDataComplete: boolean = false;
   getSecondDataComplete: boolean = false;
   ngOnInit() {
       this.compareData = JSON.parse(this.route.snapshot.queryParams.formData);
       let series: any = []
           let categories: any[] = [];
           this.stockPriceService.getCompanyStockPricesBetween(this.compareData.companyName1, this.compareData.selectStock, this.compareData.from_period, this.compareData.to_period).subscribe(data => {
               let companyOneData: any[] = [];
               data.forEach((stockPrice) => {
                   categories.push(stockPrice.dataPoint);
                   companyOneData.push(stockPrice.dataValue)
               })
               let seriesDataMemberOne = {
                   name: this.compareData.companyName1 + " (" + this.compareData.selectStock + ")",
                   data: companyOneData
               }
               series[0] = seriesDataMemberOne;
               this.getFirstDataComplete = true;
               this.stockPriceService.getCompanyStockPricesBetween(this.compareData.companyName2, this.compareData.selectStock,this.compareData.from_period, this.compareData.to_period).subscribe(data => {
                let companyTwoData: any[] = [];
                data.forEach((stockPrice) => {
                    if (categories.includes(stockPrice.dataPoint)) {
                        companyTwoData.push(stockPrice.dataValue)
                    }
                })
                let seriesDataMemberTwo = {
                    name: this.compareData.companyName2 + " (" + this.compareData.selectStock + ")",
                    data: companyTwoData
                }
                series[1] = seriesDataMemberTwo;
                this.getSecondDataComplete = true;
            });
            this.chartOneOptions = {
                chart: {
                    type: "column"
                },
                title: {
                    text: "Stock Comparision Chart"
                },
                xAxis: {
                    categories: categories
                },
                yAxis: {
                    title: {
                        text: "Stock Price"
                    }
                },
                series: series
            }
           });
           this.stockPriceService.getCompanyStockPricesBetween(this.compareData.companyName2, this.compareData.selectStock,this.compareData.from_period, this.compareData.to_period).subscribe(data => {
               let companyTwoData: any[] = [];
               data.forEach((stockPrice) => {
                   if (categories.includes(stockPrice.dataPoint)) {
                       companyTwoData.push(stockPrice.dataValue)
                   }
               })
               let seriesDataMemberTwo = {
                   name: this.compareData.companyName2 + " (" + this.compareData.selectStock + ")",
                   data: companyTwoData
               }
               series[1] = seriesDataMemberTwo;
               this.getSecondDataComplete = true;
           });
           this.chartOneOptions = {
               chart: {
                   type: "column"
               },
               title: {
                   text: "Stock Comparision Chart"
               },
               xAxis: {
                   categories: categories
               },
               yAxis: {
                   title: {
                       text: "Stock Price"
                   }
               },
               series: series
           }
       }
      }
