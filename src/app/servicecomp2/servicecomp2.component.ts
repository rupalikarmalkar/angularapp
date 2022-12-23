import { Component, OnInit } from '@angular/core';
import { DemoService } from '../service/demo.service';

@Component({
  selector: 'app-servicecomp2',
  templateUrl: './servicecomp2.component.html',
  styleUrls: ['./servicecomp2.component.css']
})
export class Servicecomp2Component implements OnInit {
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
