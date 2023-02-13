import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Registration } from '../models/registration';

@Component({
  selector: 'app-reactive-form-task',
  templateUrl: './reactive-form-task.component.html',
  styleUrls: ['./reactive-form-task.component.css']
})
export class ReactiveFormTaskComponent implements OnInit {
  myReactiveForm: FormGroup;
  isShow = false;
  
  subsription = new Registration;

  submitted: boolean = false;

  array: any[] = [];
  // isHide = false;
  constructor() {
    this.createForm();

  }
  ngOnInit() {
  }

  onAddUser() {
    this.isShow = !this.isShow;
  }
  createForm() {
    this.myReactiveForm = new FormGroup({
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

  onSubmit() {
    this.subsription = new Registration();
    this.submitted = true;
    this.subsription.name = this.myReactiveForm.value.name;
    this.subsription.lname = this.myReactiveForm.value.lname;
    this.subsription.email = this.myReactiveForm.value.email;
    this.subsription.phone = this.myReactiveForm.value.phone;
    this.subsription.cname = this.myReactiveForm.value.cname;
    this.subsription.dob = this.myReactiveForm.value.dob;

    this.array.push(this.subsription);


    console.log("Array data", this.array);

    this.myReactiveForm.reset();
  }

  // onsubmitUser() {
  //   this.isHide = !this.isHide;
  // }

  remove(indexValue) {
    this.array.splice(indexValue, 1);
  }

  dataAllClear() {
    this.myReactiveForm.value.name = "";
    this.myReactiveForm.value.lname = "";
    this.myReactiveForm.value.email = "";
    this.myReactiveForm.value.phone = "";
    this.myReactiveForm.value.cname = "";
    this.myReactiveForm.value.dob = "";
    this.myReactiveForm.value.gender = "";
    this.myReactiveForm.value.password = "";
    this.myReactiveForm.value.cassword = "";
  }

  onEdit(item: any) {

    item.isEdit = true;
  }
}

