import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  userName;
  constructor( private _utilityService:UtilityService) { 
    this._utilityService.userName.subscribe(res=>{
      this,this.userName =res;
    })

  }

  ngOnInit() {
  }
  updateUserName(){
 let emp ={ name: 'Dinesh',id:101}
  // updateUserName(uname){
    // console.log(uname.value);
    // this._utilityService.userName.next(uname.value)
         this._utilityService.userName.next(JSON.stringify(emp))

  }
}
