import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  checkBoxCheck:boolean=false;

  constructor() { }

  ngOnInit() {
  }
 onClickButton()
 {
     this.checkBoxCheck=true;
   }
}
