import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-pipe',
  templateUrl: './practice-pipe.component.html',
  styleUrls: ['./practice-pipe.component.css']
})
export class PracticePipeComponent implements OnInit {
  Fruits = ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"]; 

  sName='Anguler pipe';

  obje= { id:'101',name:'test1',salary:80000}


  constructor() { }

  ngOnInit() {
  }

}
