import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputdecoretor',
  templateUrl: './inputdecoretor.component.html',
  styleUrls: ['./inputdecoretor.component.css']
})
export class InputdecoretorComponent implements OnInit {

  @Input() arrayVar:any;

  constructor() { }

  ngOnInit() {
  }
 getObjArray(){
  // console.log(this.arrayVar);
  console.log(this.arrayVar);
  
  
 }
}
