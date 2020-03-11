import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:User;
  userProfile: FormGroup;
  constructor(private router: Router, private userservice:UserService, private formBuilder:FormBuilder) { }

  updateUser(){
    this.router.navigate(['/user-landing/update-profile']);
  }
  updatePassword(){
    this.router.navigate(['/user-landing/change-password']);
  }

  ngOnInit() {
    //const id = localStorage.getItem('userId');
    const id = sessionStorage.getItem('userId');
  this.userservice.getUserById(+id).subscribe(data=> {
    this.user=data;
  });
    this.userProfile = this.formBuilder.group({
      id: [],
      name: [this.user.name],
      email: [this.user.email],
      phone: [this.user.phone],
      username: [this.user.username],
      password: [this.user.password]
    });
  
  }
 
}
