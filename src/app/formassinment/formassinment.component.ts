import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../models/student';

@Component({
  selector: 'app-formassinment',
  templateUrl: './formassinment.component.html',
  styleUrls: ['./formassinment.component.css']
})
export class FormassinmentComponent implements OnInit {

  defaultCollege:string="DYPatil";
  defaultCourse:string="MCA";
  submitted:boolean=false;

  student = new Student();
  defaultGender:string="Male";

  genders=[
    {id:'1',value:'Male'},
    {id:'2',value:'Female'},

  ]
  
  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm) {
    // console.log(form.value);
    this.submitted=true

      this.student.inputName= form.value.studentDetails.inputName;
      this.student.EmailAddress = form.value.studentDetails.EmailAddress;
      this.student.dob = form.value.dob;
      this.student.inputAddress2 = form.value.inputAddress2;
      this.student .gender = form.value.gender;

      this.student.inputnum = form.value.inputnum;
      this.student.inputCollege = form.value.inputCollege;
      this.student.inputCourse = form.value.inputCourse;


  
    //  this.saveStudentData(this.student);
      }


      saveStudentData(student:Student) {
        console.log(student.inputCourse);
       }
}
