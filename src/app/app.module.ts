import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { DemoComponent } from './Demo/demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BindingComponent } from './binding/binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { SwitchComponent } from './switch/switch.component';
import { NgForeCoursesComponent } from './ng-fore-courses/ng-fore-courses.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';
import { LoginComponent } from './login/login.component';
import { LogindirDirective } from './logindir.directive';
import { InputdecoretorComponent } from './inputdecoretor/inputdecoretor.component';
import { ChildoutputComponent } from './childoutput/childoutput.component';
import { ChildtoparentComponent } from './childtoparent/childtoparent.component';
import { HookComponent } from './hook/hook.component';
import { HookassinComponent } from './hookassin/hookassin.component';
import { ToggleassignComponent } from './toggleassign/toggleassign.component';
import { DocheckassinComponent } from './docheckassin/docheckassin.component';
import { OnchabhebookComponent } from './onchabhebook/onchabhebook.component';
import { PracticeComponent } from './practice/practice.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { FormassinmentComponent } from './formassinment/formassinment.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegisterComponent } from './register/register.component';
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';
// import { SharedModule } from './modules/shared/shared.module';

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
    CustdirDirective,
    LoginComponent,
    LogindirDirective,
    InputdecoretorComponent,
    ChildoutputComponent,
    ChildtoparentComponent,
    HookComponent,
    HookassinComponent,
    ToggleassignComponent,
    DocheckassinComponent,
    OnchabhebookComponent,
    PracticeComponent,
    SimpleformComponent,
    FormassinmentComponent,
    ReactiveFormComponent,
    RegistrationFormComponent,
    RegisterComponent,
    ConfirmEqualValidatorDirective
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    // SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
