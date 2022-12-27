import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css']
})
export class LoginnComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit() {
  }
  checkUser(uname,pwd){
if(uname=='admin' && pwd=='admin'){
   this._route.navigate(['product/laptop']);
}
  }
}
