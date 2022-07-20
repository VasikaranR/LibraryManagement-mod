import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginDataService } from '../service/login-data.service';
import { User } from '../user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-library-dash',
  templateUrl: './library-dash.component.html',
  styleUrls: ['./library-dash.component.scss']
})
export class LibraryDashComponent implements OnInit {
  userList: User[] = [];
  roleName:string=''
  error:string=''
  roleVal:string | any='';

  constructor(private router:Router,private route: ActivatedRoute,private userService: UserService,private loginDataService:LoginDataService,private fb:FormBuilder) 
  { 
    
  }

  ngOnInit(): void {
    
    this.userService.getUsers().subscribe((res)=>{
      this.userList=res as User[];
    })
    this.roleVal=localStorage.getItem('role')


    // ,(err)=>{
    //   this.error=err.message;
    //   alert(err.error.message)
    // });
      this.roleName=this.loginDataService.role
    console.log(this.roleName);
      
  }
  public table(){
    this.router.navigate(['/user']);
  }
  

  public add(){
    this.router.navigate(['/addbook']);

  }
  public logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    this.router.navigate(['/user']);
  }
  
  public delete(_id:string){
  if (confirm('Are you sure to delete this record ?') == true) {
  this.userService.deleteUserId(_id).subscribe((res) => {
   
    
  });
  
  this.userService.getUsers().subscribe((res)=>{
  this.userList=res as User[];
    
  },(err)=>{
    this.error=err.message;
    alert(err.error.message)
  });
}



}
doUpdate(_id:string){
  
  this.userService.setId = _id
}

lend(){
  this.router.navigate(['/lenduser']); 
}
}

