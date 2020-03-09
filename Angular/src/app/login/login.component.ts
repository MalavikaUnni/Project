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
    this.userservice.getAllUser().subscribe(u => {
      this.users = u;
    });
  }


  isValid(){
    let admin_userName="admin";
    let admin_password="admin";
    let userName = this.loginForm.controls.username.value;
    let password = this.loginForm.controls.password.value;
    if((userName == admin_userName) && (password == admin_password)){
      this.router.navigate(['admin-landing']);
    }else{
      if( this.login(userName, password)){
        if(this.userservice.isActivated(this.currentUser)){
          localStorage.removeItem('userId');
          localStorage.setItem('userId',this.currentUser.id.toString());
          this.router.navigate(['user-home']);
        }else{
          alert("please activate your account to login ");
        } 
        }else{
          alert(" Invalid username or Password");
          this.loginForm.reset();
        }
      }
    }

    login(userName:string, password: string){
      for(let user of this.users ){
        if((userName == user.username) && (password == user.password)){
          this.currentUser= user;
          return true;
        }
      }
      return false;
    }

  onSubmit() {
    console.log(this.loginForm.value);
    this.router.navigate(['/user-home'])
  }

}
