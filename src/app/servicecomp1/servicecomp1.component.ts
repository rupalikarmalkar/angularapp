import { Component, OnInit } from '@angular/core';
import { DemoService } from '../service/demo.service';

@Component({
  selector: 'app-servicecomp1',
  templateUrl: './servicecomp1.component.html',
  styleUrls: ['./servicecomp1.component.css']
})
export class Servicecomp1Component implements OnInit {
 productss={};
  constructor(private _demoService:DemoService) { }

  ngOnInit() {
    this.productss =this._demoService.products;
  }
  onSubscribe(){
    this._demoService.display();
    // var objDemo = new DemoService();
    // objDemo.display();
  }

}
