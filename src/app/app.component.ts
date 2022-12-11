import { Component} from '@angular/core';
import { Book } from './Books/book';
import { Product } from './courses/product';
// import { Parents } from './deco/decoretor';
import { Emp } from './decoretor/arrayofobject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// class Bck{
//   bName:string;
//   auth:string;
//   pub:string;
//   Dt:string;
//   Ed:string; 
// }
export class AppComponent {
   public uid:number;
   data:string='red';
   pname:string;
   name: string;
  price: number;
  
  
  product: Product = new Product();
// object used in chilled

  // constructor() {       
  //   this.parenthood.id=101;
  //   this.parenthood.name="Rupali";
  //   this.parenthood.department="IT";
  //   this.parenthood.salary=70000;
  //   this.parenthood.company="TCS";
  // }

  // parenthood=new Parents();
  // bookCollection: string []=[];
 

  // bName:string='hhhhh';
  // auth:string;
  // pub:string;
  // dt:string;
  // ed:string; 


  // btnSave(){ 
  //   this.bookCollection.push( this.bName, this.auth );
   // console.log(this.bookCollection);
    
  }
//  appchildExist:boolean=true;
//    destroy(){

    
//   }

  // employee: Emp[] = [

  //   { id:101,name:"Pranita",department:"Finance",salary:75000,company:"Wipro"},
  //   { id:102,name:"Pradnya",department:"IT",salary:95000,company:"LNT"},
  //   { id:103,name:"Anuradha",department:"HR",salary:90000,company:"Google"},
  //   { id:104,name:"Latika",department:"IT",salary:75000,company:"Amazon"}

  // ]
  
// books: Book[]=[   
//   {bookName:"Computer Network",authorName:" Andrew S. Tanenbaum",publication:"Pearson Education Limited",publicationDate:"19-09-1944"},
//   {bookName:"Operating system",authorName:" Abraham Silberschatz",publication:"Pearson Education Limited",publicationDate:"22-09-1944"},
//   {bookName:"Microprocessor 8085",authorName:" B R Ram",publication:" Pearson Education Limited",publicationDate:"04-09-1975"},
//   {bookName:"C++",authorName:"Yashavant P Kanetkar",publication:"Pearson Education Limited",publicationDate:"19-01-2020"}

//]

  


  // foods: string[] = [];
  // getDataFromChild(value) {
  //   console.log(value);
  //   this.foods.push(value);
  // }

  // information getfrom childtoparent.ts ,empty array created
// empobject:any[]=[];
// getEmpFromChild(){
//   console.log(this.empobject);
//     this.empobject.push(this.empobject);
// }

//============================array o/p decorator
  // newData: any[] = [];
  // getDataFromChild(facultyData) {
  //   this.newData=facultyData;
  //   console.log(facultyData);
    
  // }

// handleData(value) {
//   this.data = value.target.value;
// }
// updateProduct() {
//   //this.product = new Product();
//   this.product.name = this.name;
//   this.product.price = this.price;}

   


  
    
   
    

   
   
   
    

  

