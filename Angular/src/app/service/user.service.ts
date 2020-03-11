import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

import { ThrowStmt } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpUrl = 'http://localhost:8765/user-service/user/';

 
  constructor(private httpclient: HttpClient, private userService: UserService) { }

  getAllUser(): Observable<User[]> {
    return this.httpclient.get<User[]>(this.httpUrl);
  }
  saveUser(user: User): Observable<User> {
    return this.httpclient.post<User>('http://localhost:8765/user-service/usersignup', user);
  }

  deleteUser(id: number): Observable<User> {
    return this.httpclient.delete<User>(this.httpUrl + id);
  }

  updateUserInfo(user: User): Observable<User> {
    return this.httpclient.put<User>(this.httpUrl, user);
  }
  getUserById(id: number): Observable<User> {
    return this.httpclient.get<User>(this.httpUrl + id);
  }

  serviceActivation(email:string){
    return this.httpclient.get(this.httpUrl+"activate/"+email);
  }



  LoggedIn(){
    let user_id = localStorage.getItem('userId');
    if(user_id==null){
      return false;
    }else{
      return true;
    }
  }
  isActivated(user:User)
  {
    if(user.enabled == true){
      return true;
    }
  }
}