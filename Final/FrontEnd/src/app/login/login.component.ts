import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { User } from '../models/user';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  users: User[];
  currentUser: User;

  constructor(private userservice:UserService, private formBuilder: FormBuilder,private router:Router,
              private authservice:AuthService) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
    // this.userservice.getAllUser().subscribe(u => {
    //   this.users = u;
    // });
  }

  isValid(){
    let username=this.loginForm.get("username").value;
    let password=this.loginForm.get("password").value;
    const result$=this.authservice.authenticate(username,password);
    result$.subscribe(data=>{
      console.log(data);
      sessionStorage.setItem("userId",data.id.toString())
      if(sessionStorage.getItem("userType")=="admin")
      {
        this.router.navigate(['./admin-landing'])
      }
      if(sessionStorage.getItem("userType")=="user") {
      this.router.navigate(['./user-landing']);
      }
    })
    }


  onSubmit() {
    //console.log(this.loginForm.value);
    //this.router.navigate(['/user-home'])
  }

}
