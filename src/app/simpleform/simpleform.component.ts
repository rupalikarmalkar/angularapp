import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/emoloyee';


@Component({
  selector: 'app-simplefrom',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {
  
  employee = new Employee();
  submitted: boolean = false;
  defaultValue:string="Angular";
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
    // OnSubmit(form:NgForm) {
      this.submitted = true;
      this.employee .course = form.value.course;
      this.employee .username = form.value.userDetails.username;
      this.employee .email = form.value.userDetails.email;
      this.employee .gender = form.value.gender;
      form.reset();
      form.controls['course'].setValue('Angular');
      form.controls['gender'].setValue('Female');



  
    //  this.saveEmployeeData(this.employee);
    }
  
    saveEmployeeData(emp:Employee) {
     console.log(emp.course);
    }
  
      }

