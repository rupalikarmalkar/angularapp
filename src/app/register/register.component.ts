import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // repeatPass:string='none';
  genders=[
    {id:'1',value:'Male'},
    {id:'2',value:'Female'},

  ]
  
  constructor() { }

  ngOnInit() {
  }
  registerForm = new FormGroup({
    firstName:new FormControl('',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(5)])),
    lastName:new FormControl('',Validators.compose([Validators.required,Validators.maxLength(10)])),
    email:new FormControl('',[Validators.required,Validators.email]),
    age:new FormControl('',Validators.compose([Validators.required,Validators.min(17),Validators.max(20)])),
    phone:new FormControl('',Validators.compose([Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(10)])),
    city:new FormControl(''),
    gender:new FormControl(''),
    password:new FormControl('',Validators.required),
    pswConfirm:new FormControl('')


  })
  OnSubmit(){
    // if(this.password.value == this.password.value){
    //   console.log(this.registerForm.valid);

    
    // }else{
    //   this.repeatPass = 'inline'
    // }
    console.log(this.registerForm);
    
  }

  get firstName():FormControl{
       return this.registerForm.get("firstName") as FormControl;
      
    }
    get lastName():FormControl{
      return this.registerForm.get("lastName") as FormControl;
    }
     get email():FormControl{
      return this.registerForm.get("email") as FormControl;
    }
    get age():FormControl{
      return this.registerForm.get("age") as FormControl;
    }
    get phone():FormControl{
      return this.registerForm.get("phone") as FormControl;
    }
    get gender():FormControl{
      return this.registerForm.get("gender") as FormControl;
    }
    get password():FormControl{
      return this.registerForm.get("password") as FormControl;
    }
    get pswConfirm():FormControl{
      return this.registerForm.get("pswConfirm") as FormControl;
    }
}
