import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registration-template-form',
  templateUrl: './registration-template-form.component.html',
  styleUrls: ['./registration-template-form.component.css']
})
export class RegistrationTemplateFormComponent implements OnInit {
  genders=[
    {id:'1',value:'Male'},
    {id:'2',value:'Female'},

  ]
  constructor() { }
  fname:string ;
  lName:string ;
  email:string ;
  age:number ;
  // gender:string;
  mobile:number;
  password:string;
  conPassword:string;



  ngOnInit() {
  }
     OnSubmit(form:NgForm) {
         console.log(form.value);

  }
}
