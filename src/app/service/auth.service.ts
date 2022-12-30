import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  checkUserNameandPassword( username:string, pws:string){
    if(username =='admin' && pws=='admin123'){
      localStorage.setItem('username','admin');
      return true;
    }else{
      return false;
    }

  }
}
