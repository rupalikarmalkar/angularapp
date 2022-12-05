import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggleassign',
  templateUrl: './toggleassign.component.html',
  styleUrls: ['./toggleassign.component.css']
})
export class ToggleassignComponent implements OnInit {
  showSecret = false;
  log = [];
    constructor() { }
  
    ngOnInit() {
    }
    onToggleDetails() {
      this.showSecret = !this.showSecret;
      this.log.push(this.log.length + 1) ;
    }}
  
//   constructor() { }

//   ngOnInit() {
//   }

// }
