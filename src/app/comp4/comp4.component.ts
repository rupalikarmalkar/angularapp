import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {
  userName;
  constructor( private _utilityService:UtilityService) { 
    this._utilityService.userName.subscribe(res=>{
      this,this.userName =res;
    })

  }
  ngOnInit() {
  }

  updateUserName(){
    let emp ={ name: 'Avnish',id:104}


            this._utilityService.userName.next(JSON.stringify(emp))
   
     }
  // updateUserName(uname){
  //   console.log(uname.value);
  //   // next method is sending data to observar i e userName
  //   this._utilityService.userName.next(uname.value)

    
  // }
}
