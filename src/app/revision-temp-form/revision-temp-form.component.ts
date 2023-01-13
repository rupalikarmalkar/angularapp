import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-revision-temp-form',
  templateUrl: './revision-temp-form.component.html',
  styleUrls: ['./revision-temp-form.component.css']
})
export class RevisionTempFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm) {
     console.log(form.value);
    //  OnSubmit(form:NgForm) 
  }

}
