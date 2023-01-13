import { Component, OnInit, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-childoutput',
  templateUrl: './childoutput.component.html',
  styleUrls: ['./childoutput.component.css']
})
export class ChildoutputComponent implements OnInit {
@Output() foodevent: EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }
//foodevent is a custom event & function will call once user enter text box value
  addtofood(value){
    this.foodevent.emit(value)
  }
}
