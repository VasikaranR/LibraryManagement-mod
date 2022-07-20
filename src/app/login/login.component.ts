import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LoginDataService } from '../service/login-data.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message: string='';
  error:string=''

  constructor(private router:Router,private route: ActivatedRoute,private loginDataService:LoginDataService) { }
  public name:string="vasi";
  public password1:string='';
  public email1:string='';
  public roleValue:string='';
  public token:string='';
  ngOnInit(): void {
     console.warn(this.loginDataService.getRole(this.roleValue));
  }
  
  public rolefunction(roleValue:string)
  {
    this.roleValue=roleValue
    localStorage.setItem('role',this.roleValue)

    
    
  }
  public dashBoard(){
    this.loginDataService.getDetails(this.name,this.password1,this.roleValue,this.token).subscribe((res)=>{
      
      this.message=Object.values(res)[1]
      
      this.token=Object.values(res)[0]
     

      localStorage.setItem('token',this.token)
      
      if(this.message==="true")
      {
       
        if(this.roleValue==='user')
        {
          
          this.router.navigate(['/dashboard']);
        }
        else{
         
          this.router.navigate(['/dashboard']);
    
        }
      }
      else{
        this.router.navigate(['/login']);
        // alert("Invalid username or password")
      }
    },(err)=>{
      this.error=err.message;
      alert(err.error.message)
    })
    console.warn(this.loginDataService.getRole(this.roleValue));
   

  }
  

  
}
