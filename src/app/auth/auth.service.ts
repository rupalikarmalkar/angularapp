import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(email:string, password: string) {
  
   return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDlCCYaOzCdLPVcq_dYHM1k4-Pj13GiX9M', 
    {
      email: email,
      password: password,
      returnSecureToken: true
    });
  
  }
  // login(email: string, password: string) {
  //   return this.http.post<AuthResponseData>(
  //      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDihNaOhfR1Y_NhGejfFvGNGmUDgarQdws',
  //      {
  //        email: email,
  //        password: password,
  //        returnSecureToken: true
  //      }
  //    )
  //  }
   
}
