import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './product/laptop/laptop.component';
import { TabletComponent } from './product/tablet/tablet.component';
import { TvComponent } from './product/tv/tv.component';
import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { UtilityModule } from './models/utility.module';

const prodRoutes:Routes=[
  { path:'',component:ProductComponent, children:[
    {path:'laptop',component:LaptopComponent},
    {path:'tv',component:TvComponent},
    {path:'tablet',component:TabletComponent},
    {path:'washingmachine',component:WashingmachineComponent},
  
  ]}, // localhost:4200/product
]

@NgModule({
  declarations: [
LaptopComponent,
TabletComponent,
TvComponent,
WashingmachineComponent,
ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoutes),
    UtilityModule
  ],
  exports:[
    RouterModule
  ]
})
export class ProductsModule { 
  // constructor() {
  //   console.log('ProductsModule loaded');
  // }
}
