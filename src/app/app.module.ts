import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { DemoComponent } from './Demo/demo.component';
import { FormsModule } from '@angular/forms';
import { BindingComponent } from './binding/binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { SwitchComponent } from './switch/switch.component';
import { NgForeCoursesComponent } from './ng-fore-courses/ng-fore-courses.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DemoComponent,
    BindingComponent,
    DirectivesComponent,
    NgswitchComponent,
    SwitchComponent,
    NgForeCoursesComponent,
    CheckboxComponent,
    AttriComponent,
    CustdirDirective
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
