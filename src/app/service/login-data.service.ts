import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LoginDataService {
  public role:string=''
  public roleValue1:string=''
  public data: string='';
  public name:string='';
  public password:string='';
  public token:String='';

  readonly baseURL="http://localhost:3000/books";

  constructor(private http:HttpClient){}
  
  public getRole(roleValue:string){
     this.role=roleValue
  }

  public getdata(){
    const data = this.getRole(this.roleValue1)
    this.role=this.data;
  }

  public getDetails(name:string,password:string,role:string,token:String){
    this.name=name;
    this.password=password;
    this.role=role;
    this.token=token;
    console.log("name :"+this.name);
   

    
    
    return this.http.get(this.baseURL +`/${name}` + `/${password}` +`/${role}`);
  }
   public getToken(){
      return localStorage.getItem('token')
    }

    public loggedIn(){
    return  !!localStorage.getItem('token')
  }
}

