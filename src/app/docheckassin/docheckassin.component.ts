import { Component, Input, OnInit,DoCheck } from '@angular/core'; 
@Component({
  selector: 'app-docheckassin',
  templateUrl: './docheckassin.component.html',
  styleUrls: ['./docheckassin.component.css']
})
export class DocheckassinComponent implements OnInit {
  Product:string='';
  // allowvalue:boolean=true;

  constructor() { }

  flowers:string[]=[];
  id:number;  
  addflowers(value){
   console.log(value);
   this.flowers.push(value);

   console.log(this.flowers);
   
  }
 Recdelete(value){
   console.log(value);
   //this.flowers.slice(this.flowers.); 
   this.flowers.splice(this.flowers.indexOf(value));
  //  console.log("Removed Flower is :- " + this.Product);
 }

//   txtClear(){
//    this.Product='';
//  }
  ngOnInit() {
  }


}
