import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revision-switch',
  templateUrl: './revision-switch.component.html',
  styleUrls: ['./revision-switch.component.css']
})
export class RevisionSwitchComponent implements OnInit {
  dropDownValue='';
  constructor() { }

  ngOnInit() {
  }
SetDropDownValue(drpValue:any){
this.dropDownValue=drpValue.target.value;
}
AddStyle(){
  let CssStyle={'color':'red','font-weight':'bold','font-size,px':20}
  return CssStyle
}

}
