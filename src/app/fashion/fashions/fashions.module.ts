import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BagsComponent } from '../bags/bags.component';
import { WatchsComponent } from '../watchs/watchs.component';
import { RouterModule, Routes } from '@angular/router';
import { FashionComponent } from '../fashion.component';


const fashionPro:Routes=[
  {path:"fashion", component:FashionComponent,children:[
    {path:'bags',component:BagsComponent},
    {path:'watchs',component:WatchsComponent}
  ]}
]

@NgModule({
  declarations: [
    // FashionComponent,
    BagsComponent, 
    WatchsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(fashionPro),

  ],
  exports:[
    RouterModule
  ]
})
export class FashionsModule { }
