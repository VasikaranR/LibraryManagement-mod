import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import {Lend } from '../lend'
// import { User } from ''

@Injectable({
  providedIn: 'root'
})
export class UserService {
    
   readonly baseURL='http://localhost:3000/books'
   readonly baseUrl='http://localhost:3000/lend';
   readonly baseUrl1='http://localhost:3000/add';

   public bookName:string=''
   public bookID!:string;
   public  userList: User[] = []
   public lendList:Lend[]=[]
   
  constructor(private http:HttpClient) { }
  


  public getLend(){
    return this.http.get(this.baseUrl)
  }

  public getUsers() {
    return this.http.get(this.baseUrl1)
}


  role:string=''
  public getRole(roleValue:string){
     this.role=roleValue
  }

public postUser(date:User){
  return this.http.post(this.baseUrl,date)
}
public getUserId(_id:string){
  return this.http.get<any>(this.baseUrl1+`/${_id}`);
}


public postAdmin(formvalid:User){
  

  return this.http.post(this.baseUrl1,formvalid)
}

public putUser(formvalid:User,_id:string){
 
  
  return this.http.put(this.baseUrl1+`/${_id}`,formvalid)
}
public deleteUserId(_id: string) {
  return this.http.delete(this.baseUrl1 + `/${_id}`);
}

set setId(_id:string){
  this.bookID=_id;
}

get getId(){
  
  return this.bookID;
}

}