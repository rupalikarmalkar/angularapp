import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductManageFigebaseService {
  url='https://angular-curd-opration-default-rtdb.firebaseio.com/';
  constructor(private _http:HttpClient) { }

   private headers = new HttpHeaders({'content-type':'application/json'})

  saveStudent(students:any){
  //  return  this._http.post('https://angular-curd-opration-default-rtdb.firebaseio.com/students.json',students)
    //  return this._http.put(this.url,students)
        return  this._http.put('https://angular-curd-opration-default-rtdb.firebaseio.com/students.json',students,{headers:this.headers});

  }
  fetchStudents(){

  return this._http.get(this.url)

  }
}
