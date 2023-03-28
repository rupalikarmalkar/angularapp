import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { DemopostComponent } from './demopost/demopost.component';
import { HomeComponent } from './home/home.component';
import { LoginnComponent } from './loginn/loginn.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { UnSavedChangesGuard } from './un-saved-changes.guard';
// import { LaptopComponent } from './product/laptop/laptop.component';
// import { ProductComponent } from './product/product.component';
// import { TabletComponent } from './product/tablet/tablet.component';
// import { TvComponent } from './product/tv/tv.component';
// import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';


const routes: Routes = [
    {path:'', redirectTo: 'loginn', pathMatch:'full'},
    {path:'loginn', component:LoginnComponent},
    
    { path: 'home', component: HomeComponent }, // localhost://4200
    { path:'aboutus',  component: AboutusComponent} ,// localhost://4200/aboutus
    
    // ]}, // localhost:4200/product
    { path:'contactus', component: ContactusComponent},
    {path:'post', component:DemopostComponent},
    {path:'postdetails/:id',component:PostdetailsComponent},
     {path:'adduser',component:AdduserComponent,canDeactivate:[UnSavedChangesGuard]},
    {path:'fashions', loadChildren:'./fashions/fashions.module#FashionsModule'},
     {path:'orders',loadChildren:'./orders/orders.module#OrdersModule'},
     {path:'product', canActivate:[AuthGuard] ,loadChildren:'./products.module#ProductsModule'},
     



    // {path:'orders' ,loadChildren:'./orders/orders.module#OrdersModule'},
   
    //{path:'fashions', loadChildren:'./fashions/fashions.module#FashionsModule'},
    
    
    {path:'**', component:PagenotfoundComponent}
  ];
  

// ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // constructor() {
  //   console.log('AppRoutingModule loaded');
  // }
 }
