import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {
  price : number = 80000;
 todaysDate= new Date();
 obj = { id:'101',nmae:'test1'}
 obser;
  constructor(private _utilityService:UtilityService) { 
    this.obser = this._utilityService.userName;
  }

  ngOnInit() {
  }

}
