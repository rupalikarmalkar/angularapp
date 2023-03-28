import { Component, OnInit } from '@angular/core';
import { ProductManageFigebaseService } from '../service/product-manage-figebase.service';

@Component({
  selector: 'app-product-manage-ass',
  templateUrl: './product-manage-ass.component.html',
  styleUrls: ['./product-manage-ass.component.css']
})
export class ProductManageAssComponent implements OnInit {

  constructor(private _productmanage:ProductManageFigebaseService) { }
  title='Student Details'
  stydents=[
    {
      id:'101',
      name:'Rupali',
      course:'Angular'
    },
    {
      id:'102',
      name:'Sonali',
      course:'React'
    },
    {
      id:'103',
      name:'Pranali',
      course:'Testing'
    }
  ]
  onAddStudent(id,name,course){
    this.stydents.push({
      id:id.value,
      name:name.value,
      course:course.value
    })

  }

  onSaveStudent(){
   this._productmanage.saveStudent(this.stydents).subscribe(
    (res)=>console.log('post data on firebase',res),
     (err)=>console.log(err)
    
    
   )
  }
  onEditStudent(){

  }
  onDeleteStudent(id){
    if(confirm(`Do you want to delete this student details`))
    this.stydents.splice(id,1)
  }
  onFetchStudent(){
    this._productmanage.fetchStudents().subscribe(
      (res)=>{
        // console.log(' fetch  data on firebase',res)
// this.stydents=res    ---it gives error coz it mismatch to stydent array
const data = JSON.stringify(res)
// console.log(data);
this.stydents=JSON.parse(data)
console.log(data);

}
      // (err)=>console.log(err)
      

    )

  }


  ngOnInit() {
    this.onFetchStudent()
  }

}
