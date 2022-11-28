import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  selectedProduct:string;
  constructor() { }

  ngOnInit() {
  }
  getProductValue(value){
    console.log(value.target.value);
    this.selectedProduct=value.target.value;
    
  }
}
