import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipeassin',
  templateUrl: './custompipeassin.component.html',
  styleUrls: ['./custompipeassin.component.css']
})
export class CustompipeassinComponent implements OnInit {
employeeArr:any[]=[
 {
  id:1,
  name:'Rupali',
  gender:'Female' ,
  dept:'IT',
  salary:75000

 },
 {
  id:2,
  name:'Dinesh',
  gender:'Male' ,
  dept:'IT',
  salary:65000

 },
 {
  id:3,
  name:'Dipali',
  gender:'Female' ,
  dept:'Finance',
  salary:85000

 },
 {
  id:4,
  name:'sonali',
  gender:'Female' ,
  dept:'HR',
  salary:85000

 },
 {
  id:5,
  name:'Avnish',
  gender:'Male' ,
  dept:'IT',
  salary:75000

 },
 {
  id:6,
  name:'Vyankatesh',
  gender:'Male' ,
  dept:'HR',
  salary:75000

 },
 {
  id:7,
  name:'Radhika',
  gender:'Female' ,
  dept:'Finance',
  salary:70000

 },
 {
  id:8,
  name:'Swapnil',
  gender:'Male' ,
  dept:'Finance',
  salary:95000

 },
 {
  id:9,
  name:'Rahul',
  gender:'Male' ,
  dept:'IT',
  salary:75000

 },
 {

  id:10,
  name:'Monika',
  gender:'Female' ,
  dept:'HR',
  salary:50000

 }




]

  constructor() { }

  ngOnInit() {
  }

}
