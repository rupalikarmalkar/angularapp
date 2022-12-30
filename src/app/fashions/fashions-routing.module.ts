import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FashionlistComponent } from './fashionlist/fashionlist.component';


const routes: Routes = [
  {path:'', component:FashionlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FashionsRoutingModule { }
