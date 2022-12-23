import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterpipe',
  templateUrl: './filterpipe.component.html',
  styleUrls: ['./filterpipe.component.css']
})
export class FilterpipeComponent implements OnInit {
namesearch:string ='';
productArr:any []=[
  {
    sno:1,
    name:'Mobile',
    price:'7000',
    availability:'Available'
  },
  {
    sno:2,
    name:'TV',
    price:'17000 Rs',
    availability:'Available'
  },
  
  {
    sno:3,
    name:'washing machine',
    price:'17000 Rs',
    availability:' Not Available'
  },
  {
    sno:4,
    name:'Tab',
    price:'35000 Rs',
    availability:'Available'
  }
  
]
  constructor() { }

  ngOnInit() {
  }

}
