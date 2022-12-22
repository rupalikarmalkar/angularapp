import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  apiURL = 'https://jsonplaceholder.typicode.com/';
  products=[
  {name:'Laptop', id:'101'},
  {name:'Mobile', id:'102'},
   {name:'TV', id:'103'}

]
  constructor(private http: HttpClient) { }
  display(){
    alert('Subscribed Successfully')
  }
  getUsersData(){
    let users='users';
    return this.http.get(this.apiURL+users);
  }
  getDataPosts(){
    let posts = 'posts';
    return this.http.get(this.apiURL+posts);
  }
}
