import { Component, OnInit } from '@angular/core';
import { Friend } from '../models/friends';

@Component({
  selector: 'app-revision-parent',
  templateUrl: './revision-parent.component.html',
  styleUrls: ['./revision-parent.component.css']
})
export class RevisionParentComponent implements OnInit {
   pTocData:string='parent to child data transfer'
  constructor() { }
  // frnd:Friend[]=[
  //   {srNo:1,name:'Anuradha',city:'Mumbai',state:'Maharashtra'},
  //   {srNo:2,name:'Aaradhy',city:'Parli',state:'Maharashtra'},
  //   {srNo:3,name:'Latika',city:'Beed',state:'Maharashtra'},
  //   {srNo:4,name:'Pooja',city:'Pune',state:'Maharashtra'},
  //   {srNo:5,name:'Dipti',city:'Delhi',state:'Delhi'}
  
  
  // ]

  ngOnInit() {
  }
//   getDataFromChild(data){
// console.log(data);

//   
newData: any[] = [];
GetChildData(frnd){
  //console.log(frnd);
  this.newData=frnd;
  console.log(this.newData);
  
}

}
