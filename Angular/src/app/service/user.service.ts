import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {User} from '../models/user';
import { USERS } from '../models/user-mock';
import { ThrowStmt } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpUrl='http://localhost:4000/users/';
 users=USERS;
  constructor(private httpclient:HttpClient,private userService:UserService) { }

getAllUser() : Observable<User[]>
{
  return this.httpclient.get<User[]>(this.httpUrl);
}
saveUser(user:User) : Observable<User>
{
  return this.httpclient.post<User>(this.httpUrl, user);
}

deleteUser(id:number) : Observable<User>
{
 return  this.httpclient.delete<User>(this.httpUrl + id);
}

updateUserInfo(user:User) : Observable<User>
{
  return this.httpclient.put<User>(this.httpUrl + user.id ,user);
}
getUserById(id:number) : Observable<User>
{
  return this.httpclient.get<User>(this.httpUrl + id);
}
}