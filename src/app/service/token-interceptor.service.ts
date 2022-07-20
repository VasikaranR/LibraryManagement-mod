import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDataService } from '../service/login-data.service';
import {catchError , throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private loginData:LoginDataService) { }

  intercept(req:HttpRequest<any>, next:HttpHandler){
    let reqToken=req.clone({
      setHeaders:{
        Authorization : 'Bearer '+ this.loginData.getToken()
      
      }
    })
    return next.handle(reqToken).pipe(
      catchError((error)=>{
        
         return throwError(error)
      })
    )
  }


}
