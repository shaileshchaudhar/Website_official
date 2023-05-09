import { Component } from '@angular/core';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent {
 language(){
  return [
    {
      id:1,
      name:'English'
    },
    {
      id:2,
      name:'Hindi'
    },
    {
      id:3,
      name:'MR'
    },
    {
      id:3,
      name:'BN'
    },
    {
      id:3,
      name:'TN'
    }
  ]
 }
 ngOnInit(){
  this.language1=this.language()
 }
 language1:any =[]
}
