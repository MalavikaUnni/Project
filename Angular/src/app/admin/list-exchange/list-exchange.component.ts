import { Component, OnInit } from '@angular/core';
import { exchange } from '../../models/exchange';
import { ExchangeService } from '../../service/exchange.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-exchange',
  templateUrl: './list-exchange.component.html',
  styleUrls: ['./list-exchange.component.css']
})
export class ListExchangeComponent implements OnInit {

  exchanges: exchange[];
  constructor(private exchangeService: ExchangeService, private router: Router) { }

  ngOnInit() {
    this.exchangeService.getAllExchange().subscribe((exch: exchange[]) => {
      this.exchanges = exch;
      //console.log(exch);

    });
  }
  deleteExchange(exchange: exchange) {
    this.exchangeService.deleteExchange(exchange.id).subscribe();
    this.exchanges = this.exchanges.filter(c => c !== exchange);
  }
 
  updateExchange(exchange:exchange)
  {
    localStorage.removeItem('exchangeId');
    localStorage.setItem('exchangeId',exchange.id.toString());
    this.router.navigate(['/update-exchange']);
  }


}
