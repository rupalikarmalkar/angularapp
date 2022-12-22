import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  userName;
  constructor( private _utilityService:UtilityService) { 
    this._utilityService.userName.subscribe(res=>{
      this,this.userName =res;
    })

  }

  ngOnInit() {
  }

  updateUserName(){
    let emp ={ name: 'Nidhish',id:101}


            this._utilityService.userName.next(JSON.stringify(emp))
   
     }
  // updateUserName(uname){
  //   console.log(uname.value);
  //   this._utilityService.userName.next(uname.value)

  // }
}
