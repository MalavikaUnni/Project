import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private userService:UserService,private formBuilder:FormBuilder,private router:Router) { }
  updatePassword:FormGroup;
  ngOnInit() {
    this.updatePassword=this.formBuilder.group({
      old_password:['',Validators.required],
      password:['',Validators.required],
      confirm_password:['',Validators.required]
    })
  }
  updateThePassword(){
    let old=this.updatePassword.controls.old_password.value;
    let pass=this.updatePassword.controls.password.value;
    let confirm=this.updatePassword.controls.confirm_password.value;
    let userId=sessionStorage.getItem("userId");
    this.userService.getUserById(+userId).subscribe(u=>{
      if(u.password===old){
        if(pass===confirm){
          u.password=pass;
          this.userService.updateUserInfo(u).subscribe(us=>{
            alert("password changed successfully")
            this.router.navigate(['/logout'])
          })
        }
      }else{
        alert("old password doesnt match")
      }
    })
  }
}