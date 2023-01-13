import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css']
})
export class LoginnComponent implements OnInit {

  constructor(private _route:Router,private _authService:AuthService) { }

  ngOnInit() {
  }
  checkUser(uname,pwd){
   var output =this._authService.checkUserNameandPassword(uname,pwd);
   if(output==true){
    window.alert('Login sucessfully')
    this._route.navigate(['product'])
   }else{
    window.alert('Invalid username and passwerd')

   }

   

//   if(uname=='admin' && pwd=='admin'){
//    this._route.navigate(['product/laptop']);
// }
//   }
}
}