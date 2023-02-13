import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-assignment',
  templateUrl: './reactive-form-assignment.component.html',
  styleUrls: ['./reactive-form-assignment.component.css']
})
export class ReactiveFormAssignmentComponent implements OnInit {
  // registerForm:FormGroup;
  // submitted:boolean=false;
  arrayData:any[]=[];
  addData(item1,item2,item3,item4,item5,item6){
  this.arrayData.push({fname:item1,lname:item2,email:item3,phone:item4,company:item5,dob:item6});
  console.log(this.arrayData);
  
  }
  registerForm= new FormControl({})
isShow=false;
  genders=[
    {id:'1',value:'Male'},
    {id:'2',value:'Female'},

  ]
  constructor() { }

  ngOnInit() {
  }

  remove(indexValue){
    this.arrayData.splice(indexValue,1);
      }

OnClear(){
  
}
onAddUser(){
 
this.isShow= !this.isShow;
}
OnSubmit(){
}

}

