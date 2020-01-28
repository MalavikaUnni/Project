import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {User} from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpUrl='http://localhost:3000/users/';
 users=USERS;
  constructor(private http:HttpClient) { }
}
