import { Component, OnInit } from '@angular/core';
import { Course } from '../courses/courses';

@Component({
  selector: 'app-ng-fore-courses',
  templateUrl: './ng-fore-courses.component.html',
  styleUrls: ['./ng-fore-courses.component.css']
})
export class NgForeCoursesComponent implements OnInit {
  title : string = "Top 3 Courses";
  course: Course[] = [
    { id:1, courseName:'Python', fees:40000, duration:'3 Month'},
    { id:2, courseName:'JavaScript', fees:35000, duration:'3 Month'},
    { id:3, courseName:'Java', fees:45000, duration:'3 Month'}
    // { id:4, courseName:'.Net', fees:40000, duration:'3 Month'}

  ]

  constructor() { }

  ngOnInit() {
  }
  
}
