import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { loadavg } from 'os';
// import { axios } from 'axios'


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
 showLogin=false
 myReactiveForm:FormGroup

  constructor(
    // private _fb:FormBuilder
    ) { 
      this.createForm()

    }

ngOnInit() {
  }
  // signUp(data:object):void{
  //   console.log(data);
    
    
  // }
  createForm(){
    this.myReactiveForm = new FormGroup({
      'username': new FormControl('',Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'bdate':new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required),
      'pswConfirm':new FormControl('',Validators.required)
    })

    

  // })
  }

  // get name():FormControl{
  //   return this.userSignUp.get("name") as FormControl;
  // }
  // get email():FormControl{
  //   return this.userSignUp.get("email") as FormControl;
  // }
  // get password():FormControl{
  //   return this.userSignUp.get("password") as FormControl;
  // }
  
  OnSubmit(){
    console.log(`this.userSignUp`);
    
  }
  getLogin(){
    this.showLogin=true
  }
  getSignUp(){
    this.showLogin=false
  }
}
