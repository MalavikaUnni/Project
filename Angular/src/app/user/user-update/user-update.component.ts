import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UpdateUserComponent implements OnInit {
  updateUser: FormGroup;
  constructor(private formBuiler: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.updateUser = this.formBuiler.group({
      id: [],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    const id = localStorage.getItem('userId');
    if (+id > 0) {
      this.userService.getUserById(+id).subscribe(user => {
        this.updateUser.patchValue(user);
      });
    }
  }
  updateTheUser() {
    this.userService.updateUserInfo(this.updateUser.value).subscribe(u => {
      this.router.navigate(['users'])
    });
  }
}
