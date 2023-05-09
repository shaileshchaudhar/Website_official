import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[DataServiceService],
})
export class LoginComponent {
  Login:boolean=false;
LoginForm!:FormGroup
checked:boolean=true;
UserName1:any="";
Password1:any="";
LoginUrl:any="http://localhost:3000/user"
Userdata:any="";
User:any="";
constructor(private _fb:FormBuilder , private _data:DataServiceService ,private router:Router ){} // _data is varible create a instance of service inside the constructor
ngOnInit():void{
  this.LoginForm=this._fb.group({
    UserName1:['',Validators.required],
    Password1:['',Validators.required],
  })
  this._data.GetAllUsers(this.LoginUrl).subscribe((data:any)=>{
    this.Userdata=data;
    console.log(this.Userdata);
   
  })
}
login():void{ 
this.User=this.Userdata.filter((e:any)=>e.Username==this.LoginForm.value.UserName1)
this.UserName1=this.User[0].Username
console.log(this.UserName1);
this.Password1=this.User[0].Password;
console.log(this.Password1);
if(this.UserName1==this.LoginForm.value.UserName1 && this.Password1==this.LoginForm.value.Password1){
  this.router.navigate(["/home"])
  
}
else{
  alert("UserName and Password is not match try again");
}

}
  result(result: any) {
    throw new Error('Method not implemented.');
  }
}
