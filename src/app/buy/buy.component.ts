import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {
  public minDate:string="";
  public name:string='';
  public booknameValue:any='';
  public bookCategoryValue:any='';
  public bookAuthorValue:any='';
  public id1:string = '';
  public getMenuId:any;
 

  list:User={
     _id:'',
    bookId:0,
    bookname:'',
    category:'',
    author:'',
    description:''
  }
  category:string='';
  author:string='';
  description:string=''
  constructor(private router:Router,private route: ActivatedRoute,private userService: UserService) { }

  id: number = 0;
  date1:any='';

  ngOnInit(): void {
    this.dateValidate();
    this.getMenuId= this.route.snapshot.paramMap.get('id');
  
    
    this.userService.getUserId(this.getMenuId).subscribe(
      (res:any)=>this.lendData(res),
      (err:any)=>console.log(err)
    )
    this.formData(this.getMenuId)
    
  }
  public formData(id1:any) {
    
    this.userService.getUserId(id1).subscribe((data) => {
      console.log("ddddd"+Object.values(data));
      
      this.booknameValue=Object.values(data)[2]
      this.bookCategoryValue=Object.values(data)[3]
      this.bookAuthorValue=Object.values(data)[4]

      })
    return true;
  }
  public lendData(res  : User){
    this.list = res
    
  }
  
  public submit(date:NgForm){

    this.userService.postUser(date.value).subscribe((data)=>{
      alert('Your Response has been submitted successfully!!!!!!!!')
      this.router.navigate(['/dashboard']);
    })
    

  }
  public dateValidate(){
    let date:any= new Date();
     
    let toDate:any=date.getDate();
    if(toDate < 10){
     toDate ="0"+ toDate;
    }
    let month=date.getMonth()+1;
    if(month < 10){
     month = '0'+month;
    }
    let year =date.getFullYear();
    this.minDate= year+"-"+month+"-"+toDate;
    
 }
 public back(){
  this.router.navigate(['/dashboard']);
}


 }

