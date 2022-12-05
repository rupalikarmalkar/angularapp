import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hookassin',
  templateUrl: './hookassin.component.html',
  styleUrls: ['./hookassin.component.css']
})
export class HookassinComponent implements OnInit,OnChanges {
  @Input() personname:string;

  constructor() { 
    console.log("HooksComponent constructor called");
    
  }
  ngOnInit(): void {
    console.log("HooksComponent ngOnInit called");
}
  ngOnChanges(changes: SimpleChanges): void {
    console.log("HooksComponent ngOnChanges called");
    for (const pname in changes) {
      const person= changes[pname]

      const {previousValue, currentValue, firstChange}=person;
      console.log(`prop name:-${pname}`);
      console.log(`prev name:-${previousValue}`);

      console.log(`current name:-${currentValue}`);

      console.log(`First change:-${firstChange}`);
      console.log("___________________");
      }
    }

  }

  


