import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Emp } from '../decoretor/arrayofobject';
import { ParentArray } from '../empDetails/empdetails';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-childtoparent',
  templateUrl: './childtoparent.component.html',
  styleUrls: ['./childtoparent.component.css']
})
export class ChildtoparentComponent implements OnInit {
  @Output()dataOfFaculty: EventEmitter <object> = new EventEmitter <object>();


// empData: Emp[]=[
//    {id:101,name:"Pranita",department:"Finance",salary:75000,company:"Wipro"},
//     { id:102,name:"Pradnya",department:"IT",salary:95000,company:"LNT"},
//     { id:103,name:"Anuradha",department:"HR",salary:90000,company:"Google"},
//     { id:104,name:"Latika",department:"IT",salary:75000,company:"Amazon"}


//]


  constructor() { }
  facultyData:ParentArray[]=[
    {id:101, facultyName:"Dr.Amit Bajaj", departmentName:"Electronics" , salary:50000 ,designation:"professor"},
    {id:102, facultyName:"Prof.Mukund Ghan", departmentName:"Chemistry" , salary:70000 ,designation:"professor"},
    {id:103, facultyName:" Prof.D.M.Kulkarni", departmentName:"Biology" , salary:60000 ,designation:"Ass.Professor"},
    {id:104, facultyName:"Assi.Prof Rupali Karmalkar", departmentName:"Computer" , salary:50000 ,designation:"Ass.Professor"},
  
   ]

  ngOnInit() {
  }
  onClickSubmit(facultyData){
   this.dataOfFaculty.emit(this.facultyData)
  
  }
}
