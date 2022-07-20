import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginDataService } from '../service/login-data.service';
import { User } from '../user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  getMenuId: any;
  constructor(private router:Router,private route: ActivatedRoute,private userService: UserService,private loginDataService:LoginDataService) 
  { 
    
  }
  public list:User={
    _id:'',
    bookId:0,
    bookname:'',
    category:'',
    author:'',
    description:''
  }
  _id:string=''

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this._id=params['_id']
      
      
    });
    this.userService.getUserId(this._id).subscribe(
      (res:any)=>this.lendData(res),
      (err:any)=>console.log(err)      
    )

    
  }
  public lendData(res  : User){
    this.list = res
    console.log(this.list);
    
  }
  back(){
    this.router.navigate(['/dashboard']); 
  }
}
