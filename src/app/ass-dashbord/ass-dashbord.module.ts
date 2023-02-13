import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashbordComponent } from './dashbord/dashbord.component';
import { EmployeeComponent } from './employee/employee.component';
import { LogoutComponent } from './logout/logout.component';
// import { LoginPageComponent } from './login-page/login-page.component';



@NgModule({
  declarations: [
    // LoginPageComponent,

     DashbordComponent, 
     EmployeeComponent, 
     LogoutComponent 
    ],
  imports: [
    CommonModule
  ]
})
export class AssDashbordModule {
  constructor(){
    console.log(`AssDashbordModule called`);
    
  }
 }
