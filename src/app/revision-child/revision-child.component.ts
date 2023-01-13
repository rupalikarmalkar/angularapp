import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Friend } from '../models/friends';

@Component({
  selector: 'app-revision-child',
  templateUrl: './revision-child.component.html',
  styleUrls: ['./revision-child.component.css']
})
export class RevisionChildComponent implements OnInit {
@Input() takeData:string;
@Input() childArray:any;


// @Output() giveData:EventEmitter = new EventEmitter();
// ctopData:string='child to parent'

//@Output() myOutput:EventEmitter<string>= new EventEmitter();
//outputMessage:string='I am child component'
@Output() passData: EventEmitter<object> = new EventEmitter<object>();
constructor() { }
frnd:Friend[]=[
  {srNo:1,name:'Anuradha',city:'Mumbai',state:'Maharashtra'},
  {srNo:2,name:'Aaradhy',city:'Parli',state:'Maharashtra'},
  {srNo:3,name:'Latika',city:'Beed',state:'Maharashtra'},
  {srNo:4,name:'Pooja',city:'Pune',state:'Maharashtra'},
  {srNo:5,name:'Dipti',city:'Delhi',state:'Delhi'}
]
   ngOnInit() {
    console.log(this.takeData);}

  passDataToParent(){
   let v = this.passData.emit(this.frnd)
   console.log(v);
  
  }
//   sendValues(){
//   this.myOutput.emit(this.outputMessage);
//  }
  }
