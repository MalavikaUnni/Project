import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {

  msg="Invalid Link";
  constructor(private userService:UserService,private router:Router) { }
  ngOnInit() {
    this.checkActivation()
    
  }
  checkActivation() {
    var urlad = this.router.url
    var strarr = urlad.split("?")
    var str = strarr[1];
    var e=str.substr(0,str.length-1)
    alert(e + "Outside")
    this.userService.serviceActivation(e).subscribe(u=>{
      alert(e = "Inside")
      if(u){
        this.msg="User Activated Successfully";
      }
    });
  }
  

}
