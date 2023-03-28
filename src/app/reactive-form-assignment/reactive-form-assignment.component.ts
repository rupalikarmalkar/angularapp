import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Registration } from '../models/registration';

@Component({
  selector: 'app-reactive-form-assignment',
  templateUrl: './reactive-form-assignment.component.html',
  styleUrls: ['./reactive-form-assignment.component.css']
})
export class ReactiveFormAssignmentComponent implements OnInit {
  arrayData:any[]=[]
  isShow:boolean=false;
  registerForm:FormGroup;
  reg= new Registration;
  submitted: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  createForm(){
    this.registerForm= new FormGroup({
      'name': new FormControl('', Validators.required),
      'lname': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'phone': new FormControl('', Validators.required),
      'gender': new FormControl('', Validators.required),
      'cname': new FormControl('', Validators.required),
      'dob': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'cPassword': new FormControl('', Validators.required,)
    })
  }
// to remove user 
  remove(indexValue){
    this.arrayData.splice(indexValue,1);
      }

// to add user
onAddUser(){
 
this.isShow= !this.isShow;
}
// submitt user input
OnSubmit(){
  this.reg = new Registration;
  this.submitted=true;
  this.reg.name=this.registerForm.value.name;
  this.reg.lname=this.registerForm.value.lname;
 
  this.reg.email = this.registerForm.value.email;
  this.reg.phone = this.registerForm.value.phone;
  this.reg.cname = this.registerForm.value.cname;
  this.reg.dob = this.registerForm.value.dob;

  this.arrayData.push(this.reg);


  console.log("Array data", this.arrayData);

  this.registerForm.reset();
}
dataAllClear() {
  this.registerForm.value.name = "";
  this.registerForm.value.lname = "";
  this.registerForm.value.email = "";
  this.registerForm.value.phone = "";
  this.registerForm.value.cname = "";
  this.registerForm.value.dob = "";
  this.registerForm.value.gender = "";
  this.registerForm.value.password = "";
  this.registerForm.value.cassword = "";
}

onEdit(item: any) {

  item.isEdit = true;
}

}

