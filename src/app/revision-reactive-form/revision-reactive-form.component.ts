import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-revision-reactive-form',
  templateUrl: './revision-reactive-form.component.html',
  styleUrls: ['./revision-reactive-form.component.css']
})
export class RevisionReactiveFormComponent implements OnInit {
  candidateForm:FormGroup;
  constructor() { }

  ngOnInit() {
  }

  CreateForm(){

  }
OnSubmit(){
  console.log(this.candidateForm);
  
}
}
