import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../service/rapidapi.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {

  apiNews:any=[];
  apiQuote:any=[];
  constructor(private _rapidapiService:RapidapiService) { }

  ngOnInit() {


    this._rapidapiService.getDataBBFinance().subscribe(res=>{
      


      console.log('Rapid API Finance Data',res);
      this.apiNews=res.news;
      console.log('Rapid API News Data',this.apiNews);
      this.apiQuote=res.quote;
      console.log('Rapid API Quote Data',this.apiQuote);
    })
    }
    
    // this._rapidapiService.getDataYHFinance().subscribe(res=>{
    //   console.log('rapid api YH finance data ',res);
      
    //})


  }


