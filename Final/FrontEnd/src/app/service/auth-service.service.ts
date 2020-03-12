import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
const url = "http://localhost:8765/user-service/login";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private userService: UserService, private http: HttpClient) {}
  authenticate(username: string, password: string) {
    // create a security token
    let authenticationToken = "Basic " + window.btoa(username + ":" + password);
    console.log(authenticationToken);
    let headers = new HttpHeaders({
      Authorization: authenticationToken
    });
    console.log("calling server")
    // send the request
    return this.http.get(url, { headers }).pipe(
      // success function
      map((data: User) => {
        console.log(data);
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("token", authenticationToken);
        sessionStorage.setItem("userType",data.userType==="ROLE_ADMIN" ? "admin":"user"); 
        return data;
      }),
      map(error => {
        return error;
      }),
   
      // failure function
      map(failureData => {
        // console message 
        console.log("failure")
        return failureData;
      })
    );
  }
  getAuthenticationToken() {
    if (this.isUserLoggedIn())
      return sessionStorage.getItem("token");
    return null;
  }
  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('username');
    if (user == null)
      return false;
    return true;
  }
  getProfileUrl(): string {
    let url = sessionStorage.getItem("profile");
    return url;
  }
  logout() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("userType")
     sessionStorage.removeItem("userId")
  }
  getUserDetails(): string {
    let user = sessionStorage.getItem('username');
    return user;
  }
}