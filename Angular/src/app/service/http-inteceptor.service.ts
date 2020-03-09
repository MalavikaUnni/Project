import { Injectable } from '@angular/core';
import { AuthService } from './auth-service.service';
import { HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInteceptorService {

  constructor(public auth:AuthService) { }

  intercept(request:HttpRequest<any>,next:HttpHandler ) {
    console.log("Inside Interceptor");
    if(this.auth.getAuthenticationToken()) {

      let getAuthenticationToken=this.auth.getAuthenticationToken();
      request=request.clone({
        setHeaders:{
          Authorization:getAuthenticationToken
        }
      });
    }
    return next.handle(request);
  }
}
