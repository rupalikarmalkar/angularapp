import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  constructor(private _postService:PostService, private route:ActivatedRoute) { }
   postArry:any[]=[];
  ngOnInit() {
    let id=this.route.snapshot.params['id'];
    
      this._postService.getPostById(id).subscribe(res =>{
      console.log('get post by id',res);
      this.postArry.push(res);
      
    })

  }

  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}


