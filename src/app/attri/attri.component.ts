import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attri',
  templateUrl: './attri.component.html',
  styleUrls: ['./attri.component.css']
})
export class AttriComponent implements OnInit {
colorVal='blue';
people:any[]=[
  {
    "name":"Jack",
    "country":"UK"
  },
  {
    "name":"Sumit",
    "country":"USA"
  },
  {
    "name":"Anup",
    "country":"HK"
  },
  {
    "name":"Codemind",
    "country":"UK"
  },
  {
    "name":"Surya",
    "country":"USA"
  }
]
uname;
  constructor() { }

  ngOnInit() {
  }
show(value){
  this.uname = value;
}
}
