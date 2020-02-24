import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExchangeService } from 'src/app/service/exchange.service';

@Component({
  selector: 'app-manageexchange',
  templateUrl: './manageexchange.component.html',
  styleUrls: ['./manageexchange.component.css']
})
export class ManageexchangeComponent implements OnInit {

  AddExchangeForm: FormGroup
  constructor(private formBuilder: FormBuilder, private router: Router, private exchangeService: ExchangeService) { }

  ngOnInit() {
    this.AddExchangeForm = this.formBuilder.group({
    
      exchangeName: ['', Validators.required],
      contactAddress: ['', Validators.required],
      brief: ['', Validators.required],
      remarks: ['', Validators.required]

    });

  }

  addExchange() {
    this.exchangeService.saveExchange(this.AddExchangeForm.value).subscribe(data => {
      console.log("Company inserted Successfully");
      this.router.navigate(['/list-exchange']);
    });
  }

  // onSubmit() {
  //   console.log(this.AddExchangeForm.value);
  // }
}
