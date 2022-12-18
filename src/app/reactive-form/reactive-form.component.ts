import { Component, OnInit } from '@angular/core';
import { FormArray, FormArrayName, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { resolve } from 'url';
import { Employee } from '../models/emoloyee';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
}) 
export class ReactiveFormComponent implements OnInit {
submitted:boolean=false;
// employee = new Employee();



notAllowedName = ['Codemind','Technology'];

  myReactiveForm:FormGroup;
  genders=[
    {id:'1',value:'Male'},
    {id:'2',value:'Female'},

  ]

  constructor() { 
    this.createForm();
   }

  ngOnInit() {
    // setTimeout(()=>{
    //   this.myReactiveForm.setValue({
    //     'userDetails':{
    //       'username':'Codemind1122',
    //       'email':'test@gmail.com'
    //     },
    //     'course':'HTML',
    //     'gender':'Male'
    //   })
    // },3500)




    //  setTimeout(()=>{
    //     this.myReactiveForm.patchValue({
    //       'userDetails':{
    //         'username':'Codemind1122',
    //         'email':'test@gmail.com'
    //       },
          
    //     })
    //   },3500)

    

      


  }
  createForm(){
    this.myReactiveForm= new FormGroup({
      'userDetails':new FormControl({
        'username':new FormControl('',[Validators.required,this.NaName.bind(this)]),
        'email':new FormControl('',[Validators.required,Validators.email],this.NaEmail)
      }),
      
      'course':new FormControl(''),
      'gender':new FormControl('Male'),
      'skills':new FormArray([
        new FormControl(null,Validators.required)
      ])

    })
  }
  OnSubmit(){
    this.submitted=true;
     console.log(this.myReactiveForm);
    // this.employee .course = this.myReactiveForm.value.course;
    // this.employee .username = form.value.userDetails.username;
    // this.employee .email = form.value.userDetails.email;
    // this.employee .gender = form.value.gender;
    
  }
  OnAddSkills(){
   (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null,Validators.required))
  
  }
  NaName(control:FormControl){
    if(this.notAllowedName.indexOf(control.value)!== -1){
      return{ 'namesNotAllowed':true}
    }
    return null;
  }
  NaEmail(control:FormControl): Promise<any> | Observable<any>{
    const myResponse = new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value === 'codemindtechnologt@gmail.com'){
          resolve({'emailNotAllowed':true})
        }else{
          resolve(null)
        }
      },5000);
    })
    return myResponse;
  }
}
