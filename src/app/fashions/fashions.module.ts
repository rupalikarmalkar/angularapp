import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FashionlistComponent } from './fashionlist/fashionlist.component';
import { FashionsRoutingModule } from './fashions-routing.module';



@NgModule({
  declarations: [FashionlistComponent],
  imports: [
    CommonModule,
    FashionsRoutingModule
  ]
})
export class FashionsModule { 
  constructor(){
    console.log('decore module is called');
    
  }
}
