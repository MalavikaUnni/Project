import { Component, OnInit } from '@angular/core';
import { IpoService } from '../../service/ipo.service';
import { Router } from '@angular/router';
import { Ipo } from '../../models/ipo';

@Component({
  selector: 'app-list-ipo',
  templateUrl: './list-ipo.component.html',
  styleUrls: ['./list-ipo.component.css']
})
export class ListIpoComponent implements OnInit {

  ipos:Ipo[]
  constructor(private ipoService:IpoService,private router:Router) { }

  ngOnInit() {
    this.ipoService.getAllIpo().subscribe(d=>{
    this.ipos=d;
    });
  }
  deleteIpo(ipo:Ipo)
  {
    this.ipoService.deleteIpo(ipo.id).subscribe();
    this.ipos=this.ipos.filter(c=>c!==ipo);
  }
  updateIpo(ipo:Ipo)
  {
    localStorage.removeItem('ipoId');
    localStorage.setItem('ipoId',ipo.id.toString());
    this.router.navigate(['/update-ipo'])
  }

}
