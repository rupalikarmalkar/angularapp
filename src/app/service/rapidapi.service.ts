import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RapidapiService {
  // url='https://yh-finance.p.rapidapi.com/auto-complete?q=tesla,region=US';

  url= 'https://bb-finance.p.rapidapi.com/market/auto-complete?query=mango';
  constructor(private httpClient:HttpClient) { }
  getDataBBFinance():Observable<any>{
    //headers -> 
    let headers= new HttpHeaders({
      'X-RapidAPI-Host': 'bb-finance.p.rapidapi.com',
      'X-RapidAPI-Key': 'cd19e83f6fmshba7d92ee89e2197p167e1djsna6f86522614b'
      
  
    })

     return this.httpClient.get(this.url, {headers: headers})
  }

  // getDataYHFinance(){
  //   let headers = new HttpHeaders({
  //     'X-RapidAPI-Host':'yh-finance.p.rapidapi.com',
  //     'X-RapidAPI-Key':'ae442dba2dmshb2be60be905b800p15ac67jsn1278ff2e80fd'
  
  //   })
   
  //   return this.httpClient.get(this.url,{headers:headers});

  // }


}
