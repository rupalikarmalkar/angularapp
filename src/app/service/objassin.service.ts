import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ObjassinService {
  // stud =  new Subject<any>();
  
  
userName= new Subject<object>();
employee= new Subject<object>();

  


  constructor() { }
}
