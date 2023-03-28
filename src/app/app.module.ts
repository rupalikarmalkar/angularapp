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
import { RegistrationTemplateFormComponent } from './registration-template-form/registration-template-form.component';
import { Servicecomp1Component } from './servicecomp1/servicecomp1.component';
import { Servicecomp2Component } from './servicecomp2/servicecomp2.component';
// import { SharedModule } from './modules/shared/shared.module';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { CountPipe } from './count.pipe';
import { PracticePipeComponent } from './practice-pipe/practice-pipe.component';
import { PracticePipe } from './practice.pipe';
import { Compassin1Component } from './compassin1/compassin1.component';
import { Compassin2Component } from './compassin2/compassin2.component';
import { ProjectassinformComponent } from './projectassinform/projectassinform.component';
import { FilterpipeComponent } from './filterpipe/filterpipe.component';
import { FilterPipe } from './filter.pipe';
import { CustompipeassinComponent } from './custompipeassin/custompipeassin.component';
import { GenderPipe } from './gender.pipe';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
// import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { LoginnComponent } from './loginn/loginn.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { DemopostComponent } from './demopost/demopost.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { UtilityModule } from './models/utility.module';
import { FashionComponent } from './fashion/fashion.component';
import { FashionsModule } from './fashion/fashions/fashions.module';
import { RapidapiComponent } from './rapidapi/rapidapi.component';
import { ProductnavbarComponent } from './productnavbar/productnavbar.component';
import { TimepassComponent } from './timepass/timepass.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { AdduserComponent } from './adduser/adduser.component';
import { RevisionstrComponent } from './revisionstr/revisionstr.component';
import { ProductManageAssComponent } from './product-manage-ass/product-manage-ass.component';
import { RevisionSwitchComponent } from './revision-switch/revision-switch.component';
import { RevisionParentComponent } from './revision-parent/revision-parent.component';
import { RevisionChildComponent } from './revision-child/revision-child.component';
import { RevisionPipeComponent } from './revision-pipe/revision-pipe.component';
import { RevisionTempFormComponent } from './revision-temp-form/revision-temp-form.component';
import { RevisionReactiveFormComponent } from './revision-reactive-form/revision-reactive-form.component';
import { AssDashbordModule } from './ass-dashbord/ass-dashbord.module';
import { MainPageComponent } from './ass-dashbord/main-page/main-page.component';
import { LoginPageComponent } from './ass-dashbord/login-page/login-page.component';
import { AdvanceBookingComponent } from './advance-booking/advance-booking.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { ReactiveFormAssignmentComponent } from './reactive-form-assignment/reactive-form-assignment.component';
import { ReactiveFormTaskComponent } from './reactive-form-task/reactive-form-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// g// import { ValidateEqualModule } from 'ng-validate-equal';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AuthComponent } from './auth/auth.component';
import {MatButtonModule} from '@angular/material/button';
import { LoddingSpinnerComponent } from './shared/lodding-spinner/lodding-spinner.component';
import { AuthontocationAuthorizationComponent } from './authontocation-authorization/authontocation-authorization.component';
import { JesonTaskComponent } from './jeson-task/jeson-task.component';


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
    // CustdirDirective,
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
    ConfirmEqualValidatorDirective,
    RegistrationTemplateFormComponent,
    Servicecomp1Component,
    Servicecomp2Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    PipeDemoComponent,
    CountPipe,
    PracticePipeComponent,
    PracticePipe,
    Compassin1Component,
    Compassin2Component,
    ProjectassinformComponent,
    FilterpipeComponent,
    FilterPipe,
    CustompipeassinComponent,
    GenderPipe,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    LoginnComponent,
    PagenotfoundComponent,
    
    DemopostComponent,
    PostdetailsComponent,
    FashionComponent,
    RapidapiComponent,
    ProductnavbarComponent,
    TimepassComponent,
    FirebaseComponent,
    AdduserComponent,
    RevisionstrComponent,
    ProductManageAssComponent,
    RevisionSwitchComponent,
    RevisionParentComponent,
    RevisionChildComponent,
    RevisionPipeComponent,
    RevisionTempFormComponent,
    RevisionReactiveFormComponent,
    MainPageComponent,
    LoginPageComponent,
    AdvanceBookingComponent,
    FoodItemComponent,
    ReactiveFormAssignmentComponent,
    ReactiveFormTaskComponent,
    AuthComponent,
    LoddingSpinnerComponent,
    AuthontocationAuthorizationComponent,
    JesonTaskComponent

    
    
    
  ],
  imports: [

    BrowserModule,
    AssDashbordModule,

    //  ValidateEqualModule,
    FashionsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UtilityModule,
    BrowserAnimationsModule,
    // HttpHeaders
    
    MatSlideToggleModule,
    MatButtonModule

    // SharedModule
  ],
  schemas:[NO_ERRORS_SCHEMA], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  // constructor() {
  //   console.log('App module is called');
  // }
}
