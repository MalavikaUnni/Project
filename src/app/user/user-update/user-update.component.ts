import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import {User} from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
updateUser :FormGroup;
  constructor(private formBuiler : FormBuilder,private userService:UserService,private router :Router) { }

  ngOnInit() {
    this.updateUser=this.formBuiler.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      mobile:['',Validators.required],
      userid:[],
      password:['',Validators.required]
    });
    const userid=localStorage.getItem('userId');
    if(+userid > 0) {
      this.userService.getUserById(+userid).subscribe(user=>{
        this.updateUser.patchValue(user);
      });
    }
  }
  updateTheUser()
{
this.userService.updateUserInfo(this.updateUser.value).subscribe(u => {
this.router.navigate(['users'])
});
}
    }
