
import { Component, } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 login:boolean=false;
 constructor(private _data :DataServiceService){}
 ngOnInit(){
  this._data.loginStatus.subscribe((data:any)=>{
    this.login=data;
  })
 }
}
