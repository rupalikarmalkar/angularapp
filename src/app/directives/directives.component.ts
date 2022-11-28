import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movies';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  isShow: boolean=true;
  title : string = "Top 3 Movies";
  movies: Movie[] = [
    { title: '3 Idiots', director: 'Rajkumar', cast: 'Amir', releaseDate: '2007' },
    { title: 'Kantara', director: 'Rishab', cast: 'Rishab', releaseDate: '2022'},
    { title: 'KGF', director: 'RockBhai', cast:'Yash', releaseDate: '2019'}
  ]


  constructor() { }

  ngOnInit() {
  }

}
