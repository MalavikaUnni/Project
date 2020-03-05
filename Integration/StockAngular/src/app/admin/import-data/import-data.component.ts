import { Component, OnInit } from '@angular/core';
import bsCustomFileInput from "bs-custom-file-input";

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.css']
})
export class ImportDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    bsCustomFileInput.init();
  }

}
