import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenderPipe } from '../gender.pipe';
import { FireBasePost } from '../models/firebasePost';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
 url='https://angular-curd-opration-default-rtdb.firebaseio.com/';
  constructor(private _httpClient:HttpClient) { }

users:any[]=[
  {id:'101', name:'Rupali' ,gender:'Female'},
  {id:'102', name:'jack',gender:'Male'},
  {id:'103', name:'avnish',gender:'Male'},
]

  createPost(){
    let postData={
      title:'this is angular 8 curd',
      content:'this is firebase curd operation with post'
    }
      return this._httpClient.post(this.url +'post.json',postData)
  }
  createPostDataReactiveForm(fireBasePost:FireBasePost){
    return this._httpClient.post(this.url +'post.json',fireBasePost)

  }
  getPostDataFirebase(){
    return this._httpClient.get(this.url+'post.json')
  }
}
