import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import {User} from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService,private router:Router) { }
  users:User[]
  ngOnInit() {
    this.userService.getAllUser().subscribe(data => {
      this.users =data;
    });
  }

deleteUser(user:User)
{
  this.userService.deleteUser(user.userid).subscribe();
  this.users=this.users.filter(u=> u!== user);
} 
updateUser(user:User)
{
localStorage.removeItem('userId');
localStorage.setItem('userId',user.userid.toString());
this.router.navigate(['update-user'])
}

}