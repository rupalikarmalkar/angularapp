import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any, gender:string)  {

    if( gender == "Female")
    {
    return "Ms." + value;}
  
    else if( gender == "Male")
    {
    return "Mr." + value;}
  
    else
    return value;
        
  
    }   

  }


  
//   text1='Miss.';
//   text2='Mr.';
//  transform(value: string, gender: string):string {
//        if(gender=='Female'){
//          return this.text1+value;
//        }else{
//          return  this.text2+value;
//        }


//        }



 

    

