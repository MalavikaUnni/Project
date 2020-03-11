import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  updateProfile: FormGroup;
  constructor(private userService:UserService, private formBuilder: FormBuilder, private router: Router) { }
  ngOnInit() {
    {
      this.updateProfile = this.formBuilder.group({
        id: [],
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        username:['',Validators.required],
        enabled:[],
        password:[],
        cpassword:[],
        phone: ['', Validators.required]
      });
      const id = sessionStorage.getItem('userId');
      if(+id)
      {
      this.userService.getUserById(+id).subscribe(user => {
        this.updateProfile.patchValue(user);
      });
    }
  }
}
  updateTheUser(){
    this.userService.updateUserInfo(this.updateProfile.value).subscribe(u=>{
      this.router.navigate(['user-landing'])
    });
  } 
}