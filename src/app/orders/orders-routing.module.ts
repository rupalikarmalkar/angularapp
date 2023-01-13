import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderlistsComponent } from './orderlists/orderlists.component';


const routes: Routes = [
  { path: '', component: OrderlistsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {
  // constructor(){
  //   console.log('OrdersRoutingModule loading');
    
  // }
}
