import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revisionstr',
  templateUrl: './revisionstr.component.html',
  styleUrls: ['./revisionstr.component.css']
})
export class RevisionstrComponent implements OnInit {

  name:string=  'rupali is Doing Good in Angular';
  status:string=  "available";
  allowStatus=false;

  isWork:string='yes,she is not Working';
  compName:string='CodeMind'
  uname:string;



constructor() { 

  
    setTimeout(() => {
      return this.allowStatus=true
     }, 4000);
   
  }
  workStatus(){
    return this.isWork="yes, she is Working hard....."
  }

  statusCall(){
    return this.status
  }

  ngOnInit() {
  }
  onEnterKey(value){
    this.uname=value;
    console.log(value);
    
  }

}
