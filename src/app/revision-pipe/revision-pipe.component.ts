import { Component, OnInit } from '@angular/core';
import { Friend } from '../models/friends';

@Component({
  selector: 'app-revision-pipe',
  templateUrl: './revision-pipe.component.html',
  styleUrls: ['./revision-pipe.component.css']
})
export class RevisionPipeComponent implements OnInit {

  constructor() { }
  frnd:Friend[]=[
    {srNo:1,name:'Anuradha',city:'Mumbai',state:'Maharashtra'},
    {srNo:2,name:'Aaradhy',city:'Parli',state:'Maharashtra'},
    {srNo:3,name:'Latika',city:'Beed',state:'Maharashtra'},
    {srNo:4,name:'Pooja',city:'Pune',state:'Maharashtra'},
    {srNo:5,name:'Dipti',city:'Delhi',state:'Delhi'}
  ]

  ngOnInit() {
  }

}
