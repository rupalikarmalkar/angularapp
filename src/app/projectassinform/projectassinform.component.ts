import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-projectassinform',
  templateUrl: './projectassinform.component.html',
  styleUrls: ['./projectassinform.component.css']
})
export class ProjectassinformComponent implements OnInit {
  notAllowedName = 'Test';


  constructor() { }


  myProject = new FormGroup({
    pname:new FormControl('',Validators.required,this.NaName.bind(this)),
    email:new FormControl('',Validators.compose([Validators.required,Validators.email])),

});

  ngOnInit() {
  }
  NaName(control:FormControl){
    if(this.notAllowedName.indexOf(control.value)!== -1){
      return{ 'namesNotAllowed':true}
    }
    return null;
  }

  OnSubmit(){
    console.log(this.myProject);
    
  }
  get pname():FormControl{
    return this.myProject.get("pname") as FormControl;
  }
   get email():FormControl{
    return this.myProject.get("email") as FormControl;
  }
}
