import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginDataService } from './service/login-data.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private loginservice :LoginDataService,
              private router:Router){}

canActivate(): boolean {
  if(this.loginservice.loggedIn()){
    return true;
  }
  else{
   alert('your logged out please login');
    this.router.navigate(['/login'])
    
    return false;
  }


}}
