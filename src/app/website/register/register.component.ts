import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 public  RegistrationForm!:FormGroup
 dataValue:any=''
  constructor(private fb:FormBuilder,private router:Router,private _data:DataServiceService,private _dilog:MatDialog) {}
  ngOnInit(): void {
    this.RegistrationForm=this.fb.group({
      Username:['',Validators.required],
      FirstName:[null,Validators.required],
      LastName:[null,Validators.required],
     
      Contactnumber: [null, [Validators.minLength(1), Validators.maxLength(10), Validators.required]],
      EmailId: [null, Validators.required,Validators.email],
      Password:  [null, [Validators.minLength(1), Validators.maxLength(6), Validators.required]],
      ConfirmPassword: ['', Validators.required],
      Address:['',Validators.required],
    })
}
SaveData(){
  this._data.SaveUserData(this.RegistrationForm.value).subscribe((result: any)=>{
    this.dataValue=result;
    console.log(this.dataValue);
    if(this.RegistrationForm.untouched){
      alert("please fill the form")
    }
    else{
      this._dilog.open(DialogAnimationsExampleDialog)
    }
})
}
}
@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dilog.html',
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) { }
  close(){
    this.dialogRef.close()
  }
}
