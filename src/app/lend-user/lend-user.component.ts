import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { Lend } from '../lend';

@Component({
  selector: 'app-lend-user',
  templateUrl: './lend-user.component.html',
  styleUrls: ['./lend-user.component.scss']
})
export class LendUserComponent implements OnInit {
  lendList: Lend[]=[];

  constructor(private router:Router,private route: ActivatedRoute,private userService: UserService) 
  { }

  ngOnInit(): void {
    this.userService.getLend().subscribe((res)=>{
      this.lendList=res as Lend[];
    })
  }
  public logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    this.router.navigate(['/user']);
  }
  
  public back(){
    this.router.navigate(['/dashboard']);
  }
}
