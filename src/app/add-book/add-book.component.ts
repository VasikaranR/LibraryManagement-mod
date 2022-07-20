import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
  providers:[UserService]
})
export class AddBookComponent implements OnInit {

 

  public id: number = 0;
  public  _id:string=''
  public formvalid: FormGroup;
  public error:string=''

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public fb: FormBuilder,
    public userService: UserService
  ) { 
    this.formvalid = this.fb.group({
      bookname: ['', [Validators.required]],
      author: ['', [Validators.required]],
      category:['',[Validators.required]],
      bookId: ['', [Validators.required]],
      description:['',[Validators.required]]
    });

  }
  public bookname!:string;
  public author!:string;
  public category!:string;
  public bookId!:string;
  public description!:string

  ngOnInit(): void {
   
    this.route.params.subscribe(params =>{
      this._id=params['_id']
      
      
    });
    
    this.userService.getUserId(this._id).subscribe(
      (res:any)=>this.editBook(res),
      (err:any)=>console.log(err)
    )
  
  }

  public editBook(res:User){

    
    this.formvalid.patchValue({
      id:res._id,
      bookId:res.bookId,
      bookname:res.bookname,
      category:res.category,
      author:res.author,
      description:res.description
    })


  }
  public save(formvalid:FormGroup) {

    console.log("valuessss"+JSON.stringify(formvalid.value));
    console.log(this._id);
    
   
    if (!this._id) {
      
      this.userService.postAdmin(formvalid.value).subscribe((data)=>{
        console.log(JSON.stringify(data));
        alert("Added successfully") 
      }
      )
    } 
    else{
      
      this.userService.putUser(formvalid.value,this._id).subscribe((res)=>{
        console.log(JSON.stringify(res));
        alert("Updated")
      })
    };
  
    this.router.navigate(['/dashboard']);
  }
  
  public back(){
    this.router.navigate(['/dashboard']);
  }

}
