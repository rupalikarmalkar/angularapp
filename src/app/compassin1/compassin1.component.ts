import { Component, OnInit } from '@angular/core';
import { ObjassinService } from '../service/objassin.service';
export class Movie{
  id:number;
  name:string;
  dept:string;
  desig:string;
  sal:number;

}
@Component({
  selector: 'app-compassin1',
  templateUrl: './compassin1.component.html',
  styleUrls: ['./compassin1.component.css']
})
export class Compassin1Component implements OnInit {
  arrayFaculty=[];
  arrayNew:Movie[]=[]
  
  constructor(private _objassin:ObjassinService) { 
  }
  ngOnInit() {

    this._objassin.employee.subscribe(res=>{
      console.log(res);
     
      this.arrayFaculty.push(res);


    });
  }

  onUpdate(eid,ename,ecmp,edept,erole){
   
    let arrayNew:Movie={id:eid,name:ename,dept:ecmp,desig:edept,sal:erole}
    this._objassin.employee.next(arrayNew);

  }
}
