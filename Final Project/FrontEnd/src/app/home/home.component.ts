import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
homeform : FormGroup
  constructor() { }

  ngOnInit() {
    $('.carousel').carousel({
      interval: 3000
  });
  }

}
