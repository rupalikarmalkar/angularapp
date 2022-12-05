import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
name:string;
data:string;
prop:string;
  constructor() { }

  ngOnInit() {
  }
  getDataOnClick(){
     this.name='o my god';
  }
}
