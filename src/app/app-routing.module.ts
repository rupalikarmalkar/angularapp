import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DemopostComponent } from './demopost/demopost.component';
import { HomeComponent } from './home/home.component';
import { LoginnComponent } from './loginn/loginn.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { ProductComponent } from './product/product.component';
import { TabletComponent } from './product/tablet/tablet.component';
import { TvComponent } from './product/tv/tv.component';
import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';


const routes: Routes = [
    {path:'', redirectTo: 'loginn', pathMatch:'full'},
    {path:'loginn', component:LoginnComponent},
    { path: 'home', component: HomeComponent }, // localhost://4200
    { path:'aboutus',  component: AboutusComponent} ,// localhost://4200/aboutus
     { path:'product',component:ProductComponent, children:[
      // { path:'product', children:[
      //  { path:'',component:ProductComponent},
      {path:'laptop',component:LaptopComponent},
      {path:'tv',component:TvComponent},
      {path:'tablet',component:TabletComponent},
      {path:'washingmachine',component:WashingmachineComponent},

    ]}, // localhost:4200/product
    { path:'contactus', component: ContactusComponent},
    {path:'post', component:DemopostComponent},
    {path:'postdetails/:id',component:PostdetailsComponent},
  //   {path:'post',component:DemopostComponent},
  // {path:'psotdetails/:id',component:PostdetailsComponent},
    { path:'**', component:PagenotfoundComponent}
  ];
  

// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
