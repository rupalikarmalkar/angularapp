import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  myRegistration:FormGroup;
  // allowAge:[17,18,19,20]
  // repeatPass:string='none';
  genders=[
    {id:'1',value:'Male'},
    {id:'2',value:'Female'},

  ]
  
  constructor() {
    this.createForm()

   }

  ngOnInit() {  
  }
  createForm(){
    this.myRegistration = new FormGroup({
        firstName: new FormControl("",Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(5)])),
        lastName:new FormControl("",Validators.compose([Validators.maxLength(10),Validators.required])),
        email:new FormControl("",Validators.compose([Validators.required,Validators.email])),
        age:new FormControl("",Validators.compose([Validators.required])),
        phone:new FormControl("",Validators.compose([Validators.pattern('[0-9]'),Validators.maxLength(10)])),
        city:new FormControl(""),
        gender:new FormControl("",[Validators.required]),
        password:new FormControl("",[Validators.required]),
        pswConfirm:new FormControl("",[Validators.required])
}
// {
//   validators:this.Mustmatch('password','pswConfirm')
// })
)}
  OnSubmit(){
       console.log(this.myRegistration);
       }

      //  AaName(control:FormControl){
      //   if(this.allowAge.indexOf(control.value) !== -1){
      //     return{ 'ageAllowed':true}
      //   }
      //   return null;
      }

      //  Mustmatch(password:any ,pswConfirm:any ){
      //   return (formGroup:FormGroup) =>{
      //     const passwordcontrol = formGroup.controls[password];
      //     const conpasswordcontrol = formGroup.controls[pswConfirm];

      //     if(passwordcontrol.value !== conpasswordcontrol.value){
      //       conpasswordcontrol.setErrors({Mustmatch:true});
      //     }else{
      //       conpasswordcontrol.setErrors(null);
      //     }


      //   }

      //  }
      // }

