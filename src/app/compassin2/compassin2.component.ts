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
  selector: 'app-compassin2',
  templateUrl: './compassin2.component.html',
  styleUrls: ['./compassin2.component.css']
})
export class Compassin2Component implements OnInit {
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
