import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderlistsComponent } from './orderlists/orderlists.component';
import { OrdersRoutingModule } from './orders-routing.module';



@NgModule({
  declarations: [
    OrderlistsComponent,
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
  ]
})
export class OrdersModule { 
  constructor() {
    console.log('OrdersModule loaded');
  }
}
