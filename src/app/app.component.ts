import { Component } from '@angular/core';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Website_official';
  sidebaropen=true;
  login:boolean=false;
  register:boolean=false;
  constructor(private data:DataServiceService){}
  
  ngOnInit(){}
}



