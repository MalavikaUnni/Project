import { Component, OnInit } from '@angular/core';
import bsCustomFileInput from "bs-custom-file-input";
import { StockPriceService } from 'src/app/service/stock-price.service';

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.css']
})
export class ImportDataComponent implements OnInit {

  constructor(private uploadService:StockPriceService) { }
  file:File;

  ngOnInit() {
    bsCustomFileInput.init();
  }
  onFileChange(e){
    this.file=e.target.files[0];
  }

  uploadData(){
    const uploadSheetData=new FormData();
    uploadSheetData.append("stocksSheet",this.file,this.file.name);
    this.uploadService.uploadStocksSheet(uploadSheetData).subscribe(
      data=>{
       // console.log("Uploaded");
      }
    );
    
  }
}
