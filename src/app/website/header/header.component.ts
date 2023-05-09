import { Component, EventEmitter, Output } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private _data :DataServiceService){}
  ngOnInit(){
   
  }

}
