import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  data: any;
  URL:any="http://localhost:3000/user"
  loginStatus :any=new Subject();
   // loginStatus is name of the subject properties is any type 
  constructor( private http:HttpClient) { } // inside the constructor create instance 
  GetAllUsers(URL:any){
    return this.http.get(URL); // api call inside the get mention url
  }
  SaveUserData(data :any){
      return this.http.post(this.URL,data)
    
     
  }
  }
