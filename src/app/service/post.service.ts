import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { devAPIurl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }

  getposts():Observable<any>{
    return this.httpClient.get(`${devAPIurl}posts`)
  }
  getPostById(id){
    
    return this.httpClient.get(`${devAPIurl}posts/` +id)
  }
  deletePostById(id){
    return this.httpClient.delete(`${devAPIurl}posts/` +id) 
  }
}
   