import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormArrayName, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { promise } from 'protractor';
import { from, interval, Observable } from 'rxjs';
import { resolve } from 'url';
import { Employee } from '../models/emoloyee';
import { FireBasePost } from '../models/firebasePost';
import { FirebaseService } from '../service/firebase.service';
import {filter, map, take, takeLast, toArray} from 'rxjs/operators'
import { loadavg } from 'os';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
}) 
export class ReactiveFormComponent implements OnInit {
submitted:boolean=false;


// employee = new Employee();

firebasePost:FireBasePost;

notAllowedName = ['Codemind','Technology'];

  myReactiveForm:FormGroup;
  genders=[
    {id:'1',value:'Male'},
    {id:'2',value:'Female'},

  ]

  constructor(private _fb:FormBuilder,private _fiebaseService:FirebaseService) { 
    this.createForm();
   }

  ngOnInit() {

    this._fiebaseService.getPostDataFirebase().subscribe(res=>{
      console.log(`getPostDataFirebase`,res);
      
    })

  console.log(`filter operator`);
  
filter
 const data = from(this._fiebaseService.users) ;
 data.pipe(
  filter(u=>u.gender == 'Male'), 
  toArray()
   ).subscribe(res =>{
     console.log('filter operator',res);
    
   }) 

// console.log(`------take operator-----`);

                //take operator
    const source= interval(1000); 
         source.pipe(
           take(5)
        ).subscribe(res =>{
  console.log('interval example',res);
  
 })

// console.log(`------last operator------`);

           //take last
       let randomsName =['rupali','html','Angular','css','codemind','javascript']   
const sourcee= from(randomsName)
source.pipe(
  takeLast(2)
  ).subscribe(res=>{
    console.log('take last operator',res);
    
  })

  // console.log(`------map operator-----`);

const dataa = from(this._fiebaseService.users) ;
data.pipe(
  map(x=>x.name + ''+'')
).subscribe(res=>{
  console.log('res map',res);
   })

    data.subscribe(res=>{
      console.log('example of from operator',res);
      
    })


// pipe combine multiple operator

// this._fiebaseService.getPostDataFirebase().pipe(
//   //map manupulate operator data
//   map(responseData =>{
//     //empty array
//     const postArray=[];
//     for(const key in responseData){
//       if(responseData.hasOwnProperty(key)){
//         //push new value
//         postArray.push({...responseData[key],id:key})
//       }
//     }
//     return postArray;
//   })
// )
//  .subscribe(res=>{
//    console.log('get data from firebase',res);
  
//  })

    // setTimeout(()=>{
    //   this.myReactiveForm.setValue({m
    //     'userDetails':{
    //       'username':'Codemind1122',
    //       'email':'test@gmail.com'
    //     },
    //     'course':'HTML',
    //     'gender':'Male'
    //   })
    // },3500)




    //  setTimeout(()=>{
    //     this.myReactiveForm.patchValue({
    //       'userDetails':{
    //         'username':'Codemind1122',
    //         'email':'test@gmail.com'
    //       },
          
    //     })
    //   },3500)

    

      


  }
  createForm(){
    // this.myReactiveForm= new FormGroup({
    //   'userDetails':new FormControl({
    //     'username':new FormControl('',[Validators.required,this.NaName.bind(this)]),
    //     'email':new FormControl('',[Validators.required,Validators.email],this.NaEmail)
    //   }),
      
    //   'course':new FormControl(''),
    //   'gender':new FormControl('Male'),
    //   'skills':new FormArray([
    //     new FormControl(null,Validators.required)
    //   ])

    // })
    this.myReactiveForm = this._fb.group({
      userDetails: this._fb.group({
        username: ['', Validators.required],
        email: ['', Validators.required]
      }),
      course: ['Angular'],
      gender: ['Male'],
      skills: this._fb.array([])
    })

  }
  OnSubmit(){
    //this.submitted=true;
    // console.log(this.myReactiveForm);
    this.submitted=true;
this.firebasePost=new FireBasePost();
this.firebasePost.username=this.myReactiveForm['controls'].userDetails['controls'].username.value;
this.firebasePost.email=this.myReactiveForm['controls'].userDetails['controls'].email.value;
this.firebasePost.course=this.myReactiveForm['controls'].course.value;
this.firebasePost.gender=this.myReactiveForm['controls'].gender.value;
this.firebasePost.skill=this.myReactiveForm['controls'].skills.value;
// console.log('firebase post class',this.firebasePost);
 this._fiebaseService.createPostDataReactiveForm(this.firebasePost).subscribe(res=>{
  console.log('post firebase',res);
  
 });

    // this.employee .course = this.myReactiveForm.value.course;
    // this.employee .username = form.value.userDetails.username;
    // this.employee .email = form.value.userDetails.email;
    // this.employee .gender = form.value.gender;
    
  }
  OnAddSkills(){
   (<FormArray>this.myReactiveForm.get('skills')).push(new FormControl(null,Validators.required));
  
  }
  removeFormControl(index:number):void{
    (<FormArray> this.myReactiveForm.get('skills')).removeAt(index); 
  }
  NaName(control:FormControl){
    if(this.notAllowedName.indexOf(control.value)!== -1){
      return{ 'namesNotAllowed':true}
    }
    return null;
  }
  NaEmail(control:FormControl): Promise<any> | Observable<any>{
    const myResponse = new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value === 'codemindtechnologt@gmail.com'){
          resolve({'emailNotAllowed':true})
        }else{
          resolve(null)
        }
      },5000);
    })
    return myResponse;
  }
}
