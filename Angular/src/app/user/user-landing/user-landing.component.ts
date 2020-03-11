import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { AuthService } from 'src/app/service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.css']
})
export class UserLandingComponent implements OnInit {

  constructor(private userservice:UserService,private auth:AuthService,private router:Router) { }

  ngOnInit() {
  }

  logout()
  {
    this.auth.logout();
    localStorage.removeItem("userId")
    this.router.navigate(['/home']);

  }

}
