import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  constructor(private userService:UserService){}
  title = 'StockMarketCharting';
  isLoggedIn:boolean = false;


  ngDoCheck(){
    this.isLoggedIn= this.userService.LoggedIn()
  }
  
}
