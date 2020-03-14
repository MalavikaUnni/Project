import { Component, OnInit } from '@angular/core';
import { IpoService } from 'src/app/service/ipo.service';
import { Router } from '@angular/router';
import { Ipo } from 'src/app/models/ipo';

@Component({
  selector: 'app-list-ipos',
  templateUrl: './list-ipos.component.html',
  styleUrls: ['./list-ipos.component.css']
})
export class ListIposComponent implements OnInit {

  ipos:Ipo[]
  constructor(private ipoService:IpoService,private router:Router) { }

  ngOnInit() {
    this.ipoService.getAllIpo().subscribe(d=>{
    this.ipos=d;
    });
  }
}
